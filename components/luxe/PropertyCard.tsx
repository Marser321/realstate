'use client';

import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize2, Heart } from 'lucide-react';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Property {
    id: number | string;
    title: string;
    slug?: string;
    price: number;
    currency: string;
    bedrooms: number;
    bathrooms: number;
    built_area: number;
    main_image: string;
    images?: string[];
    location?: string;
    status?: string;
    lifestyle_tags?: string[];
}

interface PropertyCardProps {
    property: Property;
    onHover?: (id: string | number | null) => void;
    index?: number;
}

export function PropertyCard({ property, onHover, index = 0 }: PropertyCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const images = property.images?.length ? property.images : [property.main_image];

    const handleMouseEnter = () => {
        setIsHovered(true);
        onHover?.(property.id);

        // Start slideshow if multiple images
        if (images.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 2000);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        onHover?.(null);
        setCurrentImageIndex(0);

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const formatPrice = (price: number, currency: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency || 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Link href={`/property/${property.id}`}>
                <article
                    className="property-card group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-[#D4AF37]/30 transition-all duration-500"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Image Container - 70% height for Bento style */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        {/* Main Image with Slideshow */}
                        <div className="absolute inset-0">
                            {images.map((img, i) => (
                                <Image
                                    key={i}
                                    src={img}
                                    alt={`${property.title} - Image ${i + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={`object-cover property-card-image transition-opacity duration-500 ${i === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    priority={index < 2}
                                />
                            ))}
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-foreground rounded-sm">
                                {property.status?.replace('_', ' ') || 'En Venta'}
                            </span>
                        </div>

                        {/* Favorite Button */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsFavorite(!isFavorite);
                            }}
                            className={`absolute top-4 right-4 z-10 p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 ${isFavorite
                                ? 'bg-[#D4AF37] text-white'
                                : 'bg-white/90 text-foreground hover:bg-[#D4AF37] hover:text-white'
                                }`}
                        >
                            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                        </button>

                        {/* Image Counter (on hover) */}
                        {images.length > 1 && isHovered && (
                            <div className="absolute bottom-4 left-4 z-10 flex gap-1.5">
                                {images.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-[#D4AF37] w-4' : 'bg-white/60'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Lifestyle Tags (on hover) */}
                        {property.lifestyle_tags && isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-4 right-4 z-10 flex gap-2"
                            >
                                {property.lifestyle_tags.slice(0, 2).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-[#D4AF37]/90 text-white text-xs font-medium rounded-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-4">
                        {/* Price & Location */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-serif text-xl font-bold text-foreground line-clamp-1 group-hover:text-[#D4AF37] transition-colors">
                                    {property.title}
                                </h3>
                                <div className="flex items-center text-muted-foreground text-sm mt-1">
                                    <MapPin className="w-3.5 h-3.5 mr-1" />
                                    <span>{property.location || 'Punta del Este'}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-xl font-bold text-[#D4AF37]">
                                    {formatPrice(property.price, property.currency)}
                                </span>
                                <div className="text-xs text-muted-foreground font-medium uppercase">
                                    {property.currency}
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-border" />

                        {/* Specs */}
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <Bed className="w-4 h-4 text-[#D4AF37]/70" />
                                {property.bedrooms} Dorm
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Bath className="w-4 h-4 text-[#D4AF37]/70" />
                                {property.bathrooms} Baños
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Maximize2 className="w-4 h-4 text-[#D4AF37]/70" />
                                {property.built_area} m²
                            </span>
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}
