
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxe Estate | Punta del Este Luxury Real Estate",
  description: "Descubre propiedades de lujo en Punta del Este. Búsqueda inteligente con IA para encontrar tu hogar ideal.",
  keywords: ["Punta del Este", "Real Estate", "Luxury", "Properties", "La Barra", "José Ignacio"],
  openGraph: {
    title: "Luxe Estate | Punta del Este Luxury Real Estate",
    description: "Descubre propiedades de lujo en Punta del Este.",
    type: "website",
    locale: "es_UY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
