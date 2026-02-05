---
name: UI/UX Pro Max
description: Forces high standards of Luxury Real Estate design. Shadcn/UI, Glassmorphism, and Premium Typography.
---

# UI/UX Pro Max (El Diseñador de Lujo)

## Propósito
Un directorio inmobiliario entra por los ojos. Esta skill fuerza estándares de diseño altos, evitando estilos genéricos y asegurando una experiencia "Premium".

## Contexto Ideal
- Creación de páginas de aterrizaje (Landing Pages).
- Diseño de fichas de propiedad (Property Cards).
- Estilización de componentes interactivos.

## Principios de Diseño "Real Estate Luxury"

1.  **Tipografía**:
    - Usa fuentes elegantes y legibles.
    - **Títulos**: `Playfair Display` (Serif) para dar sofisticación.
    - **Cuerpo**: `Inter` o `Geist Sans` (Sans-serif) para legibilidad técnica.

2.  **Imágenes (Hero Images)**:
    - Prioriza el formato grande. Las fotos deben sangrar a los bordes (full-width) o tener radios de borde muy sutiles.
    - Usa gradientes oscuros (`bg-gradient-to-t from-black/60 to-transparent`) sobre las imágenes para asegurar que el texto blanco sea legible.

3.  **Glassmorphism**:
    - Los datos meta (precio, baños, ubicación) deben flotar sobre las fotos.
    - Usa: `bg-white/10 backdrop-blur-md border border-white/20`.

4.  **Paleta de Colores**:
    - Base: Blanco (`#FFFFFF`) o Negro Profundo (`#0A0A0A`).
    - Acento: Oro sutil, Bronce, o Azul Marino Profundo. Evita colores primarios chillones.

5.  **Motion (Micro-interacciones)**:
    - Las tarjetas deben elevarse suavemente al hacer hover (`hover:-translate-y-1`).
    - Las imágenes deben tener un zoom sutil (`scale-105`) al interactuar.

## Ejemplo de Componente (Tailwind + Glassmorphism)

```tsx
<div className="relative group overflow-hidden rounded-xl">
  <img 
    src={property.image} 
    className="object-cover w-full h-[400px] transition-transform duration-700 group-hover:scale-110" 
  />
  <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white">
    <h3 className="font-serif text-2xl">{property.title}</h3>
    <p className="text-white/80 text-sm font-sans">{property.location}</p>
    <div className="mt-2 font-semibold text-lg">
       {formatCurrency(property.price)}
    </div>
  </div>
</div>
```
