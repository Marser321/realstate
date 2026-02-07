"use client"

import Link from "next/link"
import { Heart, MapPin, Bed, Bath, Maximize } from "lucide-react"
import { cn } from "@/lib/utils"
import { PropertyWithLocation } from "@/hooks/usePropertySearch"
import { ImageCarousel } from "./ImageCarousel"
import { useFavorites } from "@/hooks/useFavorites"
import { motion } from "framer-motion"

interface PropertyCardProps {
    property: PropertyWithLocation
    className?: string
    isHighlighted?: boolean
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

export function PropertyCard({
    property,
    className,
    isHighlighted,
    onMouseEnter,
    onMouseLeave,
}: PropertyCardProps) {
    const { isFavorite, toggleFavorite } = useFavorites()
    const isFaved = isFavorite(property.id)

    // Format price with currency
    const formatPrice = (price: number, currency: string | null) => {
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency || "USD",
            maximumFractionDigits: 0,
        }).format(price)
        return formatted
    }

    // Get images array
    const images = property.images?.length
        ? property.images
        : property.main_image
            ? [property.main_image]
            : []

    // Handle favorite click
    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFavorite(property.id)
    }

    // Calculate lifestyle match score (mock for now)
    const matchScore = property.is_featured ? 9.8 : (Math.random() * 2 + 7.5).toFixed(1)

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Link
                href={`/property/${property.slug}`}
                className={cn(
                    "group flex flex-col bg-white rounded-xl border shadow-sm overflow-hidden transition-all duration-300",
                    isHighlighted
                        ? "border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 ring-2 ring-[#D4AF37]/30"
                        : "border-slate-100 hover:shadow-xl hover:border-slate-200",
                    className
                )}
            >
                {/* Image Carousel */}
                <div className="relative">
                    <ImageCarousel
                        images={images}
                        alt={property.title}
                        aspectRatio="4/3"
                    />

                    {/* Favorite Button */}
                    <button
                        onClick={handleFavoriteClick}
                        className={cn(
                            "absolute top-3 right-3 z-20 p-2 rounded-full transition-all duration-200",
                            isFaved
                                ? "bg-red-500 text-white"
                                : "bg-white/10 backdrop-blur text-white hover:bg-white hover:text-red-500"
                        )}
                    >
                        <Heart className={cn("w-4 h-4", isFaved && "fill-current")} />
                    </button>

                    {/* Status Badge */}
                    <div className="absolute bottom-3 left-3 z-10 flex gap-2">
                        {property.is_featured && (
                            <span className="px-2 py-1 bg-[#D4AF37] text-white rounded text-[10px] font-bold uppercase tracking-wider shadow-lg">
                                Destacado
                            </span>
                        )}
                        {property.status === "for_rent" && (
                            <span className="px-2 py-1 bg-blue-600 text-white rounded text-[10px] font-bold uppercase tracking-wider">
                                Alquiler
                            </span>
                        )}
                    </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base font-serif font-bold text-slate-900 leading-tight line-clamp-1 group-hover:text-[#D4AF37] transition-colors">
                            {property.title}
                        </h3>
                        <div className="text-xs font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded flex-shrink-0 ml-2">
                            {matchScore} Match
                        </div>
                    </div>

                    {/* Location */}
                    <p className="text-sm text-slate-500 mb-3 flex items-center">
                        <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                        {property.location_name || "Punta del Este"}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-lg font-bold text-[#D4AF37]">
                            {formatPrice(property.price, property.currency)}
                        </span>
                        <span className="text-xs text-slate-400 font-medium tracking-tight">
                            {property.currency || "USD"}
                        </span>
                    </div>

                    {/* Features */}
                    <div className="mt-auto pt-3 border-t border-slate-50 flex justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                            <Bed className="w-3.5 h-3.5" />
                            {property.bedrooms || 0} Dorm
                        </span>
                        <span className="flex items-center gap-1">
                            <Bath className="w-3.5 h-3.5" />
                            {property.bathrooms || 0} Baños
                        </span>
                        <span className="flex items-center gap-1">
                            <Maximize className="w-3.5 h-3.5" />
                            {property.built_area || "—"} m²
                        </span>
                    </div>

                    {/* Lifestyle Tags */}
                    {property.lifestyle_tags && property.lifestyle_tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                            {property.lifestyle_tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-[10px] capitalize"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </motion.div>
    )
}
