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
            prospect_properties: {
                Row: {
                    id: string
                    created_at: string
                    updated_at: string
                    address: string
                    status: string
                    owner_name: string | null
                    owner_whatsapp: string | null
                    last_contact: string | null
                    [key: string]: any
                }
                Insert: {
                    id?: string;
                    created_at?: string;
                    updated_at?: string;
                    address?: string;
                    status?: string;
                    owner_name?: string | null;
                    owner_whatsapp?: string | null;
                    last_contact?: string | null;
                    [key: string]: any
                }
                Update: {
                    id?: string;
                    created_at?: string;
                    updated_at?: string;
                    address?: string;
                    status?: string;
                    owner_name?: string | null;
                    owner_whatsapp?: string | null;
                    last_contact?: string | null;
                    [key: string]: any
                }
                Relationships: []
            }
            outreach_queue: {
                Row: {
                    id: string
                    created_at: string
                    lead_id: string
                    status: string
                    scheduled_for: string
                    message_body: string | null
                    last_error: string | null
                    channel: string
                    [key: string]: any
                }
                Insert: {
                    id?: string;
                    created_at?: string;
                    lead_id: string;
                    status?: string;
                    scheduled_for?: string;
                    message_body?: string | null;
                    last_error?: string | null;
                    channel?: string;
                    [key: string]: any
                }
                Update: {
                    id?: string;
                    created_at?: string;
                    lead_id?: string;
                    status?: string;
                    scheduled_for?: string;
                    message_body?: string | null;
                    last_error?: string | null;
                    channel?: string;
                    [key: string]: any
                }
                Relationships: [
                    {
                        foreignKeyName: "outreach_queue_lead_id_fkey"
                        columns: ["lead_id"]
                        referencedRelation: "prospect_properties"
                        referencedColumns: ["id"]
                    }
                ]
            }
            outreach_log: {
                Row: {
                    id: string
                    created_at: string
                    lead_id: string
                    queue_id: string | null
                    channel: string
                    direction: string
                    content: string | null
                    metadata: Json | null
                    [key: string]: any
                }
                Insert: {
                    id?: string;
                    created_at?: string;
                    lead_id: string;
                    queue_id?: string | null;
                    channel: string;
                    direction: string;
                    content?: string | null;
                    metadata?: Json | null;
                    [key: string]: any
                }
                Update: {
                    id?: string;
                    created_at?: string;
                    lead_id?: string;
                    queue_id?: string | null;
                    channel?: string;
                    direction?: string;
                    content?: string | null;
                    metadata?: Json | null;
                    [key: string]: any
                }
                Relationships: [
                    {
                        foreignKeyName: "outreach_log_lead_id_fkey"
                        columns: ["lead_id"]
                        referencedRelation: "prospect_properties"
                        referencedColumns: ["id"]
                    }
                ]
            }
            agencies: {
                Row: {
                    id: string | number
                    created_at: string
                    name: string
                    slug: string
                    logo: string | null
                    [key: string]: any
                }
                Insert: {
                    id?: string | number;
                    created_at?: string;
                    name: string;
                    slug: string;
                    logo?: string | null;
                    [key: string]: any
                }
                Update: {
                    id?: string | number;
                    created_at?: string;
                    name?: string;
                    slug?: string;
                    logo?: string | null;
                    [key: string]: any
                }
                Relationships: []
            }
            properties: {
                Row: {
                    id: string | number
                    created_at: string
                    title: string
                    slug: string
                    agency_id: string | number
                    price: number
                    currency: string
                    status: string
                    is_featured: boolean
                    bedrooms: number
                    bathrooms: number
                    view_count: number
                    main_image: string | null
                    [key: string]: any
                }
                Insert: {
                    id?: string | number;
                    created_at?: string;
                    title: string;
                    slug: string;
                    agency_id: string | number;
                    price: number;
                    currency: string;
                    status?: string;
                    is_featured?: boolean;
                    bedrooms?: number;
                    bathrooms?: number;
                    view_count?: number;
                    main_image?: string | null;
                    [key: string]: any
                }
                Update: {
                    id?: string | number;
                    created_at?: string;
                    title?: string;
                    slug?: string;
                    agency_id?: string | number;
                    price?: number;
                    currency?: string;
                    status?: string;
                    is_featured?: boolean;
                    bedrooms?: number;
                    bathrooms?: number;
                    view_count?: number;
                    main_image?: string | null;
                    [key: string]: any
                }
                Relationships: [
                    {
                        foreignKeyName: "properties_agency_id_fkey"
                        columns: ["agency_id"]
                        referencedRelation: "agencies"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
