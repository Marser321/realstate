export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            agencies: {
                Row: {
                    id: number
                    created_at: string
                    updated_at: string
                    name: string
                    slug: string
                    logo_url: string | null
                    description: string | null
                    tier_subscription: 'basic' | 'pro' | 'enterprise'
                    contact_email: string | null
                    contact_phone: string | null
                    whatsapp: string | null
                    website: string | null
                    address: string | null
                    city: string | null
                    is_verified: boolean
                    total_properties: number
                    total_views: number
                }
                Insert: {
                    id?: number
                    created_at?: string
                    updated_at?: string
                    name: string
                    slug: string
                    logo_url?: string | null
                    description?: string | null
                    tier_subscription?: 'basic' | 'pro' | 'enterprise'
                    contact_email?: string | null
                    contact_phone?: string | null
                    whatsapp?: string | null
                    website?: string | null
                    address?: string | null
                    city?: string | null
                    is_verified?: boolean
                    total_properties?: number
                    total_views?: number
                }
                Update: {
                    id?: number
                    created_at?: string
                    updated_at?: string
                    name?: string
                    slug?: string
                    logo_url?: string | null
                    description?: string | null
                    tier_subscription?: 'basic' | 'pro' | 'enterprise'
                    contact_email?: string | null
                    contact_phone?: string | null
                    whatsapp?: string | null
                    website?: string | null
                    address?: string | null
                    city?: string | null
                    is_verified?: boolean
                    total_properties?: number
                    total_views?: number
                }
            }
            agency_users: {
                Row: {
                    id: number
                    agency_id: number
                    user_id: string
                    role: 'owner' | 'admin' | 'member'
                    created_at: string
                }
                Insert: {
                    id?: number
                    agency_id: number
                    user_id: string
                    role?: 'owner' | 'admin' | 'member'
                    created_at?: string
                }
                Update: {
                    id?: number
                    agency_id?: number
                    user_id?: string
                    role?: 'owner' | 'admin' | 'member'
                    created_at?: string
                }
            }
            locations: {
                Row: {
                    id: number
                    slug: string
                    name: string
                    type: 'city' | 'zone' | 'neighborhood' | 'beach' | null
                    parent_id: number | null
                    coordinates: unknown | null // PostGIS geography
                    created_at: string
                }
                Insert: {
                    id?: number
                    slug: string
                    name: string
                    type?: 'city' | 'zone' | 'neighborhood' | 'beach' | null
                    parent_id?: number | null
                    coordinates?: unknown | null
                    created_at?: string
                }
                Update: {
                    id?: number
                    slug?: string
                    name?: string
                    type?: 'city' | 'zone' | 'neighborhood' | 'beach' | null
                    parent_id?: number | null
                    coordinates?: unknown | null
                    created_at?: string
                }
            }
            profiles: {
                Row: {
                    id: string
                    full_name: string | null
                    role: 'admin' | 'agent' | 'user'
                    avatar_url: string | null
                    phone: string | null
                    whatsapp: string | null
                    bio: string | null
                    license_number: string | null
                    created_at: string
                }
                Insert: {
                    id: string
                    full_name?: string | null
                    role?: 'admin' | 'agent' | 'user'
                    avatar_url?: string | null
                    phone?: string | null
                    whatsapp?: string | null
                    bio?: string | null
                    license_number?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    full_name?: string | null
                    role?: 'admin' | 'agent' | 'user'
                    avatar_url?: string | null
                    phone?: string | null
                    whatsapp?: string | null
                    bio?: string | null
                    license_number?: string | null
                    created_at?: string
                }
            }
            properties: {
                Row: {
                    id: number
                    created_at: string
                    updated_at: string
                    title: string
                    slug: string
                    description: string | null
                    price: number
                    currency: 'USD' | 'UYU' | null
                    status: 'for_sale' | 'for_rent' | 'sold' | 'rented' | null
                    is_featured: boolean
                    built_area: number | null
                    plot_area: number | null
                    bedrooms: number | null
                    bathrooms: number | null
                    garage_spaces: number | null
                    location_id: number
                    agency_id: number | null
                    agent_id: string | null
                    main_image: string | null
                    images: string[] | null
                    video_url: string | null
                    floor_plan_url: string | null
                    features: Json | null
                    lifestyle_tags: string[] | null
                    location_point: unknown | null // PostGIS geography
                    view_count: number
                }
                Insert: {
                    id?: number
                    created_at?: string
                    updated_at?: string
                    title: string
                    slug: string
                    description?: string | null
                    price: number
                    currency?: 'USD' | 'UYU' | null
                    status?: 'for_sale' | 'for_rent' | 'sold' | 'rented' | null
                    is_featured?: boolean
                    built_area?: number | null
                    plot_area?: number | null
                    bedrooms?: number | null
                    bathrooms?: number | null
                    garage_spaces?: number | null
                    location_id: number
                    agency_id?: number | null
                    agent_id?: string | null
                    main_image?: string | null
                    images?: string[] | null
                    video_url?: string | null
                    floor_plan_url?: string | null
                    features?: Json | null
                    lifestyle_tags?: string[] | null
                    location_point?: unknown | null
                    view_count?: number
                }
                Update: {
                    id?: number
                    created_at?: string
                    updated_at?: string
                    title?: string
                    slug?: string
                    description?: string | null
                    price?: number
                    currency?: 'USD' | 'UYU' | null
                    status?: 'for_sale' | 'for_rent' | 'sold' | 'rented' | null
                    is_featured?: boolean
                    built_area?: number | null
                    plot_area?: number | null
                    bedrooms?: number | null
                    bathrooms?: number | null
                    garage_spaces?: number | null
                    location_id?: number
                    agency_id?: number | null
                    agent_id?: string | null
                    main_image?: string | null
                    images?: string[] | null
                    video_url?: string | null
                    floor_plan_url?: string | null
                    features?: Json | null
                    lifestyle_tags?: string[] | null
                    location_point?: unknown | null
                    view_count?: number
                }
            }
            outreach_queue: {
                Row: {
                    id: string
                    lead_id: string
                    created_at: string
                    stage: 'initial' | 'followup_1' | 'followup_2' | 'final' | 'manual' | null
                    channel: 'whatsapp' | 'email' | 'sms'
                    status: 'pending' | 'processing' | 'sent' | 'failed' | 'cancelled' | null
                    scheduled_for: string
                    template_id: string | null
                    message_body: string | null
                    personalization_data: Json | null
                    attempts: number | null
                    last_error: string | null
                }
                Insert: {
                    id?: string
                    lead_id: string
                    created_at?: string
                    stage?: 'initial' | 'followup_1' | 'followup_2' | 'final' | 'manual' | null
                    channel: 'whatsapp' | 'email' | 'sms'
                    status?: 'pending' | 'processing' | 'sent' | 'failed' | 'cancelled' | null
                    scheduled_for?: string
                    template_id?: string | null
                    message_body?: string | null
                    personalization_data?: Json | null
                    attempts?: number | null
                    last_error?: string | null
                }
                Update: {
                    id?: string
                    lead_id?: string
                    created_at?: string
                    stage?: 'initial' | 'followup_1' | 'followup_2' | 'final' | 'manual' | null
                    channel?: 'whatsapp' | 'email' | 'sms'
                    status?: 'pending' | 'processing' | 'sent' | 'failed' | 'cancelled' | null
                    scheduled_for?: string
                    template_id?: string | null
                    message_body?: string | null
                    personalization_data?: Json | null
                    attempts?: number | null
                    last_error?: string | null
                }
            }
            prospect_properties: {
                Row: {
                    id: string
                    created_at: string
                    updated_at: string
                    source: 'google_maps' | 'mercadolibre' | 'facebook' | 'infocasas' | 'gallito' | 'other'
                    original_url: string | null
                    external_id: string | null
                    address: string | null
                    neighborhood: string | null
                    city: string | null
                    property_type: 'casa' | 'apartamento' | 'terreno' | 'local' | 'ph' | 'other' | null
                    description: string | null
                    listed_price: number | null
                    currency: string | null
                    market_price_estimate: number | null
                    price_gap_percentage: number | null
                    days_on_market: number | null
                    owner_name: string | null
                    owner_phone: string | null
                    owner_email: string | null
                    owner_whatsapp: string | null
                    quality_score: number | null
                    status: 'new' | 'qualified' | 'disqualified' | 'contacted' | 'converted' | null
                    disqualification_reason: string | null
                    meta: Json | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    updated_at?: string
                    source: 'google_maps' | 'mercadolibre' | 'facebook' | 'infocasas' | 'gallito' | 'other'
                    original_url?: string | null
                    external_id?: string | null
                    address?: string | null
                    neighborhood?: string | null
                    city?: string | null
                    property_type?: 'casa' | 'apartamento' | 'terreno' | 'local' | 'ph' | 'other' | null
                    description?: string | null
                    listed_price?: number | null
                    currency?: string | null
                    market_price_estimate?: number | null
                    price_gap_percentage?: number | null
                    days_on_market?: number | null
                    owner_name?: string | null
                    owner_phone?: string | null
                    owner_email?: string | null
                    owner_whatsapp?: string | null
                    quality_score?: number | null
                    status?: 'new' | 'qualified' | 'disqualified' | 'contacted' | 'converted' | null
                    disqualification_reason?: string | null
                    meta?: Json | null
                }
                Update: {
                    id?: string
                    created_at?: string
                    updated_at?: string
                    source?: 'google_maps' | 'mercadolibre' | 'facebook' | 'infocasas' | 'gallito' | 'other'
                    original_url?: string | null
                    external_id?: string | null
                    address?: string | null
                    neighborhood?: string | null
                    city?: string | null
                    property_type?: 'casa' | 'apartamento' | 'terreno' | 'local' | 'ph' | 'other' | null
                    description?: string | null
                    listed_price?: number | null
                    currency?: string | null
                    market_price_estimate?: number | null
                    price_gap_percentage?: number | null
                    days_on_market?: number | null
                    owner_name?: string | null
                    owner_phone?: string | null
                    owner_email?: string | null
                    owner_whatsapp?: string | null
                    quality_score?: number | null
                    status?: 'new' | 'qualified' | 'disqualified' | 'contacted' | 'converted' | null
                    disqualification_reason?: string | null
                    meta?: Json | null
                }
            }
        }
        Functions: {
            get_user_agency: {
                Args: { user_uuid: string }
                Returns: number | null
            }
            user_belongs_to_agency: {
                Args: { user_uuid: string; agency_id_param: number }
                Returns: boolean
            }
        }
    }
}

// Helper types for easier use
export type Agency = Database['public']['Tables']['agencies']['Row']
export type AgencyInsert = Database['public']['Tables']['agencies']['Insert']
export type AgencyUpdate = Database['public']['Tables']['agencies']['Update']

export type AgencyUser = Database['public']['Tables']['agency_users']['Row']
export type AgencyUserInsert = Database['public']['Tables']['agency_users']['Insert']

export type Property = Database['public']['Tables']['properties']['Row']
export type PropertyInsert = Database['public']['Tables']['properties']['Insert']
export type PropertyUpdate = Database['public']['Tables']['properties']['Update']

export type Profile = Database['public']['Tables']['profiles']['Row']
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']

export type Location = Database['public']['Tables']['locations']['Row']

export type ProspectProperty = Database['public']['Tables']['prospect_properties']['Row']
export type OutreachQueue = Database['public']['Tables']['outreach_queue']['Row']
