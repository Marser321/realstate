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
            properties: {
                Row: {
                    id: string
                    created_at: string
                    title: string
                    description: string | null
                    slug: string
                    price: number
                    currency: string
                    bedrooms: number
                    bathrooms: number
                    area_m2: number
                    type: 'house' | 'apartment' | 'land' | 'commercial'
                    status: 'for_sale' | 'for_rent'
                    location: unknown // PostGIS geography point
                    address: string | null
                    images: string[]
                    featured: boolean
                    agent_id: string | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    title: string
                    description?: string | null
                    slug: string
                    price: number
                    currency?: string
                    bedrooms: number
                    bathrooms: number
                    area_m2: number
                    type: 'house' | 'apartment' | 'land' | 'commercial'
                    status: 'for_sale' | 'for_rent'
                    location?: unknown
                    address?: string | null
                    images?: string[]
                    featured?: boolean
                    agent_id?: string | null
                }
                Update: {
                    id?: string
                    created_at?: string
                    title?: string
                    description?: string | null
                    slug?: string
                    price?: number
                    currency?: string
                    bedrooms?: number
                    bathrooms?: number
                    area_m2?: number
                    type?: 'house' | 'apartment' | 'land' | 'commercial'
                    status?: 'for_sale' | 'for_rent'
                    location?: unknown
                    address?: string | null
                    images?: string[]
                    featured?: boolean
                    agent_id?: string | null
                }
            }
            amenities: {
                Row: {
                    id: string
                    name: string
                    category: string // 'lifestyle', 'feature', etc.
                    icon: string | null
                }
                Insert: {
                    id?: string
                    name: string
                    category?: string
                    icon?: string | null
                }
                Update: {
                    id?: string
                    name?: string
                    category?: string
                    icon?: string | null
                }
            }
            property_amenities: {
                Row: {
                    property_id: string
                    amenity_id: string
                }
                Insert: {
                    property_id: string
                    amenity_id: string
                }
                Update: {
                    property_id?: string
                    amenity_id?: string
                }
            }
        }
        Views: {
            [_: string]: never
        }
        Functions: {
            [_: string]: never
        }
        Enums: {
            [_: string]: never
        }
    }
}
