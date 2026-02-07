import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

// Create a Supabase client with the SERVICE_ROLE key to bypass RLS
// We need this to create the agency and link the user
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { agencyName, agencySlug, city, description, adminEmail, adminPassword, adminName } = body

        // 1. Sign up the user
        const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
            email: adminEmail,
            password: adminPassword,
            email_confirm: true, // Auto-confirm email since we are admin
            user_metadata: {
                full_name: adminName,
            }
        })

        if (authError) {
            console.error('Auth error:', authError)
            return NextResponse.json(
                { error: authError.message },
                { status: 400 }
            )
        }

        if (!authData.user) {
            return NextResponse.json(
                { error: 'Failed to create user' },
                { status: 500 }
            )
        }

        const userId = authData.user.id

        // 2. Create the Agency
        const { data: agencyData, error: agencyError } = await supabaseAdmin
            .from('agencies')
            .insert({
                name: agencyName,
                slug: agencySlug,
                description: description,
                city: city || null,
                tier_subscription: 'basic' // Valid values: 'basic' | 'pro' | 'enterprise'
            })
            .select()
            .single()

        if (agencyError) {
            // Rollback user creation if agency fails (optional but good practice)
            await supabaseAdmin.auth.admin.deleteUser(userId)
            console.error('Agency error:', agencyError)
            return NextResponse.json(
                { error: 'Failed to create agency: ' + agencyError.message },
                { status: 400 }
            )
        }

        const agencyId = agencyData.id

        // 3. Link User to Agency (Create agency_user)
        const { error: linkError } = await supabaseAdmin
            .from('agency_users')
            .insert({
                agency_id: agencyId,
                user_id: userId,
                role: 'owner'
            })

        if (linkError) {
            console.error('Link error:', linkError)
            return NextResponse.json(
                { error: 'Failed to link user to agency' },
                { status: 400 }
            )
        }

        return NextResponse.json({
            success: true,
            userId,
            agencyId,
            message: 'Registration successful'
        })

    } catch (error) {
        console.error('Registration error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
