"use client"

import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, A11y } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

interface ImageCarouselProps {
    images: string[]
    alt: string
    aspectRatio?: "4/3" | "16/9" | "1/1"
    className?: string
    onImageClick?: () => void
    showArrows?: boolean
}

export function ImageCarousel({
    images,
    alt,
    aspectRatio = "4/3",
    className,
    onImageClick,
    showArrows = true,
}: ImageCarouselProps) {
    const swiperRef = useRef<SwiperType | null>(null)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    // Prevent card navigation when swiping
    const handleSwiperClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    // Handle navigation arrow clicks
    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        swiperRef.current?.slidePrev()
    }

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        swiperRef.current?.slideNext()
    }

    // Fallback for empty images
    if (!images || images.length === 0) {
        return (
            <div
                className={cn(
                    "relative bg-slate-100 flex items-center justify-center",
                    aspectRatio === "4/3" && "aspect-[4/3]",
                    aspectRatio === "16/9" && "aspect-[16/9]",
                    aspectRatio === "1/1" && "aspect-square",
                    className
                )}
            >
                <span className="text-slate-400 text-sm">Sin imágenes</span>
            </div>
        )
    }

    // Single image - no carousel needed
    if (images.length === 1) {
        return (
            <div
                className={cn(
                    "relative overflow-hidden",
                    aspectRatio === "4/3" && "aspect-[4/3]",
                    aspectRatio === "16/9" && "aspect-[16/9]",
                    aspectRatio === "1/1" && "aspect-square",
                    className
                )}
                onClick={onImageClick}
            >
                <Image
                    src={images[0]}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
        )
    }

    return (
        <div
            className={cn(
                "relative overflow-hidden group/carousel",
                aspectRatio === "4/3" && "aspect-[4/3]",
                aspectRatio === "16/9" && "aspect-[16/9]",
                aspectRatio === "1/1" && "aspect-square",
                className
            )}
            onClick={handleSwiperClick}
        >
            <Swiper
                modules={[Pagination, A11y]}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet !bg-white/50 !w-1.5 !h-1.5",
                    bulletActiveClass: "!bg-white !w-2 !h-2",
                }}
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning)
                    setIsEnd(swiper.isEnd)
                }}
                className="w-full h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={`${src}-${index}`} className="relative">
                        <Image
                            src={src}
                            alt={`${alt} - Imagen ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows */}
            {showArrows && images.length > 1 && (
                <>
                    <button
                        onClick={handlePrev}
                        disabled={isBeginning}
                        className={cn(
                            "absolute left-2 top-1/2 -translate-y-1/2 z-10",
                            "w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm",
                            "flex items-center justify-center",
                            "opacity-0 group-hover/carousel:opacity-100 transition-all duration-200",
                            "hover:bg-white hover:scale-110",
                            "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                        )}
                    >
                        <ChevronLeft className="w-4 h-4 text-slate-900" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={isEnd}
                        className={cn(
                            "absolute right-2 top-1/2 -translate-y-1/2 z-10",
                            "w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm",
                            "flex items-center justify-center",
                            "opacity-0 group-hover/carousel:opacity-100 transition-all duration-200",
                            "hover:bg-white hover:scale-110",
                            "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                        )}
                    >
                        <ChevronRight className="w-4 h-4 text-slate-900" />
                    </button>
                </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-2 right-2 z-10 px-2 py-0.5 rounded-full bg-black/50 text-white text-[10px] font-medium">
                {images.length} fotos
            </div>
        </div>
    )
}
