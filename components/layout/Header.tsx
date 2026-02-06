
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
                    <span>PuntaRealEstate</span>
                </Link>
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link href="/search" className="transition-colors hover:text-primary">
                        Propiedades
                    </Link>
                    <Link href="/search" className="transition-colors hover:text-primary">
                        Mapa Interactivo
                    </Link>
                    <Link href="/partners" className="transition-colors hover:text-primary">
                        Inmobiliarias
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                        Publicar Propiedad
                    </Button>
                    <Button size="sm">
                        Iniciar Sesión
                    </Button>
                </div>
            </div>
        </header>
    )
}
