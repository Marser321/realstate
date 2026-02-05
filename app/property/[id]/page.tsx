// @regression-guard-locked: Scrollytelling Property Detail v2.0

'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Home, Share, Heart, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ParallaxGallery } from "@/components/luxe/ParallaxGallery";
import { ScrollRevealSection, StickySidebar, FeatureReveal, TextReveal } from "@/components/luxe/ScrollAnimations";
import { InvestmentPotential } from "@/components/property/InvestmentPotential";
import Link from "next/link";

// Mock property data - Replace with real data fetching
const PROPERTY = {
    id: 1,
    title: "Villa Marítima La Barra",
    location: "La Barra, Montoya Beach",
    badge: "Exclusiva",
    price: 2500000,
    currency: "USD",
    bedrooms: 5,
    bathrooms: 6,
    builtArea: 450,
    plotArea: 1200,
    yearBuilt: 2021,
    description: [
        "Situada en el corazón de La Barra, a pasos de las olas de Montoya, 'Villa Marítima' representa el pináculo del lujo de verano. Diseñada por el reconocido arquitecto Martín Gómez Arquitectos, esta propiedad fusiona la vida interior y exterior de manera impecable.",
        "Las características incluyen una piscina infinita climatizada, cocina de grado profesional y una suite principal con vistas panorámicas al océano. El jardín paisajístico ofrece privacidad absoluta mientras está a minutos de la vibrante vida nocturna y gastronomía de La Barra."
    ],
    amenities: ['Vista al Mar', 'Piscina Climatizada', 'Casa de Huéspedes', 'Chimenea', 'Smart Home', 'Cava de Vinos', 'Parrilla', 'Seguridad 24/7'],
    images: [
        { src: '/images/placeholders/luxury-villa.jpg', alt: 'Vista Principal' },
        { src: '/images/placeholders/interior-view.jpg', alt: 'Interior' },
        { src: '/images/placeholders/modern-apartment.jpg', alt: 'Cocina' },
        { src: '/images/placeholders/interior-living.jpg', alt: 'Living' },
        { src: '/images/placeholders/beach-house.jpg', alt: 'Vista al Mar' },
    ],
    agent: {
        name: "Santiago Roberts",
        title: "Senior Partner",
        phone: "+598 99 123 456",
        whatsapp: "59899123456",
        avatar: "/images/placeholders/agent-profile.jpg"
    }
};

export default function PropertyDetailPage() {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="bg-background min-h-screen text-foreground">
            {/* FLOATING HEADER */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4"
            >
                <div className="backdrop-blur-md bg-black/30 rounded-full px-6 py-3">
                    <Link href="/" className="font-serif font-bold text-xl tracking-tight text-white">
                        Luxe<span className="text-[#D4AF37]">Estate</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white rounded-full"
                    >
                        <Share className="w-5 h-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white rounded-full"
                    >
                        <Heart className="w-5 h-5" />
                    </Button>
                </div>
            </motion.nav>

            {/* PARALLAX GALLERY */}
            <ParallaxGallery
                images={PROPERTY.images}
                title={PROPERTY.title}
                location={PROPERTY.location}
                badge={PROPERTY.badge}
            />

            {/* MAIN CONTENT */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT COLUMN - Details */}
                    <div className="lg:col-span-7 space-y-16">

                        {/* Key Stats with Animation */}
                        <ScrollRevealSection>
                            <div className="flex flex-wrap gap-8 py-8 border-b border-border">
                                {[
                                    { icon: Bed, label: 'Dormitorios', value: `${PROPERTY.bedrooms} Suites` },
                                    { icon: Bath, label: 'Baños', value: `${PROPERTY.bathrooms} Completos` },
                                    { icon: Home, label: 'Área Construida', value: `${PROPERTY.builtArea} m²` },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="p-4 bg-muted rounded-2xl text-[#D4AF37]">
                                            <stat.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                                            <p className="text-lg font-bold">{stat.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollRevealSection>

                        {/* Description with Text Reveal */}
                        <ScrollRevealSection delay={0.1}>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                                    Vida Costera Refinada
                                </h2>
                                {PROPERTY.description.map((paragraph, index) => (
                                    <TextReveal
                                        key={index}
                                        text={paragraph}
                                        className="text-muted-foreground leading-relaxed text-lg"
                                    />
                                ))}
                            </div>
                        </ScrollRevealSection>

                        {/* Investment Potential Section */}
                        <ScrollRevealSection delay={0.15}>
                            <InvestmentPotential />
                        </ScrollRevealSection>

                        {/* Amenities with Feature Reveal */}
                        <ScrollRevealSection delay={0.2}>
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-8">Amenidades</h3>
                                <FeatureReveal features={PROPERTY.amenities} />
                            </div>
                        </ScrollRevealSection>

                        {/* Property Details Grid */}
                        <ScrollRevealSection delay={0.3}>
                            <div className="bg-muted/50 rounded-2xl p-8">
                                <h3 className="text-2xl font-serif font-bold mb-6">Detalles de la Propiedad</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { label: 'Área del Terreno', value: `${PROPERTY.plotArea} m²` },
                                        { label: 'Área Construida', value: `${PROPERTY.builtArea} m²` },
                                        { label: 'Año de Construcción', value: PROPERTY.yearBuilt },
                                        { label: 'Estado', value: 'En Venta' },
                                    ].map((detail) => (
                                        <div key={detail.label}>
                                            <p className="text-sm text-muted-foreground">{detail.label}</p>
                                            <p className="font-bold text-lg">{detail.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollRevealSection>

                        {/* Map Section */}
                        <ScrollRevealSection delay={0.4}>
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-6">Ubicación</h3>
                                <div className="h-80 bg-muted rounded-2xl relative overflow-hidden flex items-center justify-center">
                                    <MapPin className="w-12 h-12 text-muted-foreground/30" />
                                    <span className="absolute bottom-4 text-muted-foreground text-sm">
                                        Ubicación aproximada por privacidad
                                    </span>
                                </div>
                            </div>
                        </ScrollRevealSection>

                    </div>

                    {/* RIGHT COLUMN - Sticky Sidebar */}
                    <div className="lg:col-span-5">
                        <StickySidebar topOffset={100}>

                            {/* Price Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="p-8 rounded-3xl border border-border shadow-2xl bg-card"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                            Precio de Venta
                                        </p>
                                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">
                                            {formatPrice(PROPERTY.price)}
                                        </h2>
                                    </div>
                                    <Badge variant="gold" className="text-sm">
                                        {PROPERTY.badge}
                                    </Badge>
                                </div>

                                <div className="space-y-3">
                                    <Button className="w-full bg-[#D4AF37] hover:bg-[#B8942F] text-white h-14 text-lg font-semibold rounded-xl">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Agendar Visita
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full h-14 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-xl text-lg font-semibold"
                                        asChild
                                    >
                                        <a href={`https://wa.me/${PROPERTY.agent.whatsapp}?text=Hola! Me interesa la propiedad ${PROPERTY.title}`} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="w-5 h-5 mr-2" />
                                            WhatsApp
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Agent Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="bg-muted rounded-2xl p-6 flex items-center gap-5"
                            >
                                <div className="w-20 h-20 bg-muted-foreground/20 rounded-full overflow-hidden ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-background">
                                    <img
                                        src={PROPERTY.agent.avatar}
                                        alt={PROPERTY.agent.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground font-medium">Tu asesor</p>
                                    <h4 className="font-bold text-xl">{PROPERTY.agent.name}</h4>
                                    <p className="text-[#D4AF37] font-medium">{PROPERTY.agent.title}</p>
                                </div>
                            </motion.div>

                        </StickySidebar>
                    </div>

                </div>
            </div>

            {/* BACK TO TOP / FOOTER SPACER */}
            <div className="h-32 lg:h-12" />

            {/* MOBILE STICKY CTA BAR */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 1 }}
                className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-border p-4 pb-8 z-50 lg:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.1)]"
            >
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Precio</p>
                        <p className="text-2xl font-serif font-bold text-foreground">{formatPrice(PROPERTY.price)}</p>
                    </div>
                    <Button
                        size="lg"
                        className="bg-[#D4AF37] hover:bg-[#B8942F] text-white rounded-xl shadow-lg shadow-[#D4AF37]/20"
                        asChild
                    >
                        <a href={`https://wa.me/${PROPERTY.agent.whatsapp}?text=Hola! Me interesa la propiedad ${PROPERTY.title}`} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            WhatsApp
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
