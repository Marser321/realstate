'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PropertyCard } from './PropertyCard';

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

interface BentoGridProps {
    properties: Property[];
    title?: string;
    subtitle?: string;
    onPropertyHover?: (id: string | number | null) => void;
}

export function BentoGrid({
    properties,
    title = "Propiedades Destacadas",
    subtitle = "Selección curada de propiedades exclusivas",
    onPropertyHover
}: BentoGridProps) {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
                >
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                            {title}
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#E8D48A] rounded-full mb-4" />
                        <p className="text-muted-foreground text-lg">{subtitle}</p>
                    </div>

                    <button className="group flex items-center gap-2 text-[#D4AF37] font-semibold hover:gap-3 transition-all">
                        Ver todas las propiedades
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property, index) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            index={index}
                            onHover={onPropertyHover}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {properties.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16 bg-muted/50 rounded-2xl border border-dashed border-border"
                    >
                        <p className="text-muted-foreground font-serif text-xl italic">
                            Cargando propiedades exclusivas...
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
