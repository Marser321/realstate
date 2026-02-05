import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Map as MapIcon, Filter, Heart, ChevronDown } from "lucide-react"
import { LifestyleFilter } from "@/components/features/lifestyle-filter"
import InteractiveMap from "@/components/features/interactive-map"
import Image from "next/image"
import Link from "next/link"

// Loading fallback for lifestyle filter
function LifestyleFilterSkeleton() {
    return (
        <div className="flex gap-2">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-9 w-24 rounded-full bg-slate-100 animate-pulse" />
            ))}
        </div>
    )
}

export default function SearchPage() {
    return (
        <div className="flex flex-col h-screen bg-white">

            {/* 1. HEADER (Sticky) */}
            <header className="flex-none h-16 border-b border-slate-100 flex items-center px-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
                <Link href="/" className="flex items-center mr-8">
                    <div className="font-serif font-bold text-xl tracking-tight text-slate-900">
                        Luxe<span className="text-[#D4AF37]">Estate</span>
                    </div>
                </Link>

                {/* Compact Search Bar */}
                <div className="flex-1 max-w-xl hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 border border-transparent focus-within:border-[#D4AF37]/50 focus-within:bg-white transition-all">
                    <Search className="w-4 h-4 text-slate-400 mr-2" />
                    <input
                        type="text"
                        placeholder="La Barra, José Ignacio, Vista al Mar..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none text-slate-900 placeholder:text-slate-500"
                    />
                </div>

                <nav className="ml-auto flex items-center gap-4">
                    <Button variant="ghost" className="hidden md:flex">Ingresar</Button>
                    <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800">Publicar</Button>
                </nav>
            </header>

            {/* 2. FILTERS BAR */}
            <div className="flex-none h-14 border-b border-slate-100 flex items-center px-6 gap-3 overflow-x-auto scrollbar-hide bg-white z-40">
                <Button variant="outline" className="rounded-full border-slate-200 text-slate-700 text-xs h-8 px-3 hover:bg-slate-50 hover:text-slate-900">
                    <Filter className="w-3 h-3 mr-2" /> Filtros
                </Button>
                {['Rango de Precio', 'Ambientes', 'Tipo de Propiedad'].map((filter) => (
                    <Button key={filter} variant="outline" className="rounded-full border-slate-200 text-slate-700 text-xs h-8 px-3 hover:bg-slate-50 hover:text-slate-900 flex items-center whitespace-nowrap">
                        {filter} <ChevronDown className="w-3 h-3 ml-1 opacity-50" />
                    </Button>
                ))}
                <div className="w-px h-6 bg-slate-200 mx-2" />

                {/* Active Lifestyle Filter Component */}
                <Suspense fallback={<LifestyleFilterSkeleton />}>
                    <LifestyleFilter className="flex-nowrap" />
                </Suspense>
            </div>

            {/* 3. CONTENT AREA (Split View) */}
            <div className="flex-1 flex overflow-hidden relative">

                {/* LEFT: Scrollable List */}
                <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[45%] overflow-y-auto p-6 scrollbar-thin">
                    <div className="mb-4 flex justify-between items-center">
                        <h1 className="text-lg font-semibold text-slate-900">42 Propiedades de Lujo en Punta del Este</h1>
                        <span className="text-sm text-slate-500">Ordenar por: <span className="text-slate-900 font-medium cursor-pointer">Relevancia</span></span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="group flex flex-col bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden">
                                {/* Image Carousel Placeholder */}
                                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                                    <Image
                                        src={`/images/placeholders/luxury-villa.jpg`}
                                        alt="Property"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 right-3 z-10">
                                        <button className="p-2 rounded-full bg-white/10 backdrop-blur hover:bg-white text-white hover:text-red-500 transition-colors">
                                            <Heart className="w-4 h-4 fill-current opacity-90" />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-3 left-3 z-10">
                                        <span className="px-2 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-bold uppercase tracking-wider text-slate-900">
                                            Nuevo
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-4 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-base font-serif font-bold text-slate-900 leading-tight">Villa Moderna La Juanita</h3>
                                        <div className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">9.8 Match</div>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-3">La Juanita, José Ignacio</p>

                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-lg font-bold text-[#D4AF37]">$1,200,000</span>
                                        <span className="text-xs text-slate-400 font-medium tracking-tight">USD</span>
                                    </div>

                                    <div className="mt-auto pt-3 border-t border-slate-50 flex justify-between text-xs text-slate-500">
                                        <span>4 Dorm</span>
                                        <span>3 Baños</span>
                                        <span>280 m²</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Map (Sticky/Fixed) */}
                <div className="hidden md:block flex-1 bg-slate-100 relative h-full">
                    <InteractiveMap />
                </div>

                {/* Mobile Map Toggle */}
                <div className="md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                    <Button className="rounded-full shadow-2xl px-6 bg-slate-900 text-white">
                        <MapIcon className="w-4 h-4 mr-2" /> Mapa
                    </Button>
                </div>

            </div>
        </div>
    );
}
