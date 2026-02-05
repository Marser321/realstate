'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Building2,
    Eye,
    TrendingUp,
    Plus,
    Star,
    Edit,
    ExternalLink,
    Home,
    DollarSign,
    Target,
    Zap,
} from 'lucide-react'
import { PropertiesTable } from '@/components/partners/PropertiesTable'

// Mock data for demo - replace with Supabase query
const mockAgency = {
    name: 'Premium Real Estate',
    logo_url: null,
    tier_subscription: 'basic' as const,
    total_properties: 12,
    total_views: 1847,
}

const mockProperties = [
    {
        id: 1,
        title: 'Villa Moderna en La Barra',
        slug: 'villa-moderna-la-barra',
        main_image: '/demo/property-1.jpg',
        price: 1250000,
        currency: 'USD' as const,
        status: 'for_sale' as const,
        is_featured: true,
        bedrooms: 4,
        bathrooms: 3,
        view_count: 234,
    },
    {
        id: 2,
        title: 'Apartamento Frente al Mar',
        slug: 'apartamento-frente-mar',
        main_image: '/demo/property-2.jpg',
        price: 680000,
        currency: 'USD' as const,
        status: 'for_sale' as const,
        is_featured: false,
        bedrooms: 2,
        bathrooms: 2,
        view_count: 156,
    },
    {
        id: 3,
        title: 'Casa en José Ignacio',
        slug: 'casa-jose-ignacio',
        main_image: '/demo/property-3.jpg',
        price: 2100000,
        currency: 'USD' as const,
        status: 'for_rent' as const,
        is_featured: true,
        bedrooms: 5,
        bathrooms: 4,
        view_count: 412,
    },
]

// Stats Card Component
function StatCard({
    icon: Icon,
    label,
    value,
    trend,
    color = 'gold'
}: {
    icon: React.ElementType
    label: string
    value: string | number
    trend?: string
    color?: 'gold' | 'green' | 'blue'
}) {
    const colorClasses = {
        gold: 'from-gold/20 to-gold/5 border-gold/20',
        green: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
        blue: 'from-sky-500/20 to-sky-500/5 border-sky-500/20',
    }
    const iconColors = {
        gold: 'text-gold',
        green: 'text-emerald-500',
        blue: 'text-sky-500',
    }

    return (
        <div className={`rounded-xl border bg-gradient-to-br ${colorClasses[color]} p-5`}>
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-muted-foreground mb-1">{label}</p>
                    <p className="text-2xl font-bold text-foreground">{value}</p>
                    {trend && (
                        <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1">
                            <TrendingUp className="w-3 h-3" />
                            {trend}
                        </p>
                    )}
                </div>
                <div className={`p-2 rounded-lg bg-background/50 ${iconColors[color]}`}>
                    <Icon className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}

export default function DashboardPage() {
    const [properties, setProperties] = useState(mockProperties)

    const handleToggleFeatured = (propertyId: number) => {
        setProperties(prev => prev.map(p =>
            p.id === propertyId ? { ...p, is_featured: !p.is_featured } : p
        ))
        // TODO: Update in Supabase
    }

    const handleEdit = (propertyId: number) => {
        // TODO: Open edit modal or redirect to edit page
        console.log('Edit property:', propertyId)
    }

    return (
        <div className="min-h-[calc(100vh-4rem)] p-6 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                    <div>
                        <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                            Bienvenido, <span className="text-gold">{mockAgency.name}</span>
                        </h1>
                        <p className="text-muted-foreground mt-1">
                            Gestiona tus propiedades y analiza su rendimiento
                        </p>
                    </div>
                    <button className="btn-luxe py-2.5 px-5 rounded-xl text-white font-medium flex items-center gap-2 w-fit">
                        <Plus className="w-4 h-4" />
                        Nueva Propiedad
                    </button>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    <StatCard
                        icon={Home}
                        label="Total Propiedades"
                        value={mockAgency.total_properties}
                        color="gold"
                    />
                    <StatCard
                        icon={Eye}
                        label="Vistas del Mes"
                        value={mockAgency.total_views.toLocaleString()}
                        trend="+12% vs mes anterior"
                        color="blue"
                    />
                    <StatCard
                        icon={Star}
                        label="Propiedades Destacadas"
                        value={properties.filter(p => p.is_featured).length}
                        color="gold"
                    />
                    <StatCard
                        icon={DollarSign}
                        label="Valor Total Inventario"
                        value="$4.03M"
                        color="green"
                    />
                </motion.div>

                {/* Properties Table */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card rounded-xl overflow-hidden"
                >
                    <div className="p-5 border-b border-border/50">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-foreground">
                                Mis Propiedades
                            </h2>
                            <a
                                href={`/agencia/${mockAgency.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-sm text-gold hover:underline flex items-center gap-1"
                            >
                                Ver perfil público
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    <PropertiesTable
                        properties={properties}
                        onToggleFeatured={handleToggleFeatured}
                        onEdit={handleEdit}
                    />
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    <button className="p-4 rounded-xl border border-border hover:border-gold/50 bg-background/50 text-left group transition-all">
                        <Building2 className="w-8 h-8 text-gold mb-3" />
                        <h3 className="font-medium text-foreground group-hover:text-gold transition-colors">
                            Editar Perfil de Agencia
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Actualiza logo, descripción y contacto
                        </p>
                    </button>
                    <button className="p-4 rounded-xl border border-border hover:border-gold/50 bg-background/50 text-left group transition-all">
                        <TrendingUp className="w-8 h-8 text-gold mb-3" />
                        <h3 className="font-medium text-foreground group-hover:text-gold transition-colors">
                            Analíticas Avanzadas
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Ver métricas detalladas de rendimiento
                        </p>
                    </button>
                    <a
                        href="/partners/dashboard/sniper"
                        className="p-4 rounded-xl border border-gold/30 hover:border-gold bg-gradient-to-br from-gold/10 to-transparent text-left group transition-all"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <Target className="w-8 h-8 text-gold" />
                            <span className="text-xs font-bold text-white bg-red-500 px-2 py-0.5 rounded-full animate-pulse">LIVE</span>
                        </div>
                        <h3 className="font-medium text-foreground group-hover:text-gold transition-colors">
                            Motor de Crecimiento
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Sniper de propiedades activo. Ver leads.
                        </p>
                    </a>
                    <a
                        href="/partners/dashboard/marketing"
                        className="p-4 rounded-xl border border-indigo-500/30 hover:border-indigo-500 bg-gradient-to-br from-indigo-500/10 to-transparent text-left group transition-all"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <Zap className="w-8 h-8 text-indigo-400" />
                            <span className="text-xs font-bold text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-500/30">NEW</span>
                        </div>
                        <h3 className="font-medium text-foreground group-hover:text-indigo-400 transition-colors">
                            Agencia de Contenido
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Solicita fotos, videos y copy con IA.
                        </p>
                    </a>
                </motion.div>
            </div>
        </div>
    )
}
