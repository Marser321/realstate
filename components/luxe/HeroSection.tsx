'use client';

import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export function HeroSection() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <section className="relative h-screen min-h-[700px] overflow-hidden">
            {/* Video Background with Poster Fallback */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/placeholders/luxury-villa.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    {/* Video placeholder - replace with actual drone footage */}
                    {/* <source src="/videos/drone-mansions.mp4" type="video/mp4" /> */}
                </video>

                {/* Dark Overlay 30% for better text contrast */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
            </div>

            {/* Header Navigation */}
            <header className="absolute top-0 left-0 right-0 z-50">
                <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center group">
                        <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight transition-transform group-hover:scale-105">
                            Luxe<span className="text-[#D4AF37]">Estate</span>
                        </h1>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/search" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide">
                            Propiedades
                        </Link>
                        <Link href="/search" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide">
                            Mapa
                        </Link>
                        <Link href="/partners" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium text-sm tracking-wide">
                            Inmobiliarias
                        </Link>
                        <button className="btn-luxe px-6 py-2.5 rounded-full text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-[#D4AF37]/20">
                            Publicar
                        </button>
                    </div>
                </nav>
            </header>

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-5xl"
                >
                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex items-center justify-center gap-2 mb-8"
                    >
                        <div className="px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/20 backdrop-blur-md flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-xs">
                                Real Estate de Lujo
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[1.1] tracking-tighter drop-shadow-2xl">
                        Encuentra tu
                        <br />
                        <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            hogar ideal
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl md:text-3xl text-white/90 font-light mb-16 max-w-3xl mx-auto leading-relaxed"
                    >
                        La colección más exclusiva de propiedades en Punta del Este, La Barra y José Ignacio.
                    </motion.p>
                </motion.div>

                {/* AI Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="w-full max-w-2xl"
                >
                    <div className="glass-card rounded-full p-2 flex items-center shadow-2xl">
                        <div className="flex items-center flex-1 pl-4">
                            <Search className="w-5 h-5 text-[#D4AF37] mr-3" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="¿Buscas un ático con vista al mar y espacio para oficina?"
                                className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-foreground placeholder:text-muted-foreground text-lg py-3"
                            />
                        </div>
                        <button className="btn-luxe px-8 py-3 rounded-full text-white font-semibold text-lg">
                            Buscar
                        </button>
                    </div>
                </motion.div>

                {/* Quick Lifestyle Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mt-8"
                >
                    {['Vista al Mar', 'Golf & Country', 'Sunset Views', 'Chacras Privadas', 'Frente al Lago'].map((tag, i) => (
                        <motion.button
                            key={tag}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white/90 font-medium hover:bg-white/20 hover:border-[#D4AF37]/50 transition-all cursor-pointer"
                        >
                            {tag}
                        </motion.button>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1.5 h-3 bg-[#D4AF37] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
