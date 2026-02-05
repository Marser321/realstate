
"use client"

import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

// Dynamically import the map to avoid SSR issues (window not defined)
const Map = dynamic(() => import('./leaflet-map'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full min-h-[400px] relative bg-slate-100 flex items-center justify-center rounded-xl overflow-hidden">
            <Skeleton className="w-full h-full absolute inset-0" />
            <span className="relative z-10 text-slate-400 font-medium">Loading Map...</span>
        </div>
    ),
})

export default function InteractiveMap() {
    return <Map />
}
