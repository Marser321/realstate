---
name: seo_local_dominator
description: Estrategia técnica de SEO Local, Schema.org y URLs amigables para dominar los resultados de búsqueda inmobiliaria.
---

# SEO Local Dominator

> **Propósito**: Asegurar que Google entienda, indexe y priorice nuestras propiedades sobre la competencia. "Si no está en Google, no existe".

## 1. Estrategia de Datos Estructurados (Schema.org)
Cada página de propiedad DEBE inyectar JSON-LD.
- **Tipo**: `RealEstateListing` (y `Product` como fallback rico).
- **Campos Críticos**:
  - `name`: Título de la propiedad.
  - `description`: Descripción (primeras 150 palabras).
  - `image`: Array de URLs de imágenes.
  - `address`: Objeto `PostalAddress` completo.
  - `geo`: `GeoCoordinates` (lat/long) para SEO Local (Maps).
  - `price`: Para Rich Snippets de precio.

### Snippet (Next.js `next-seo` o manual)
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": property.title,
  "url": `https://midirectorio.com/p/${property.slug}`,
  "price": property.price,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": property.city,
    "addressRegion": property.state
  }
}) }} />
```

## 2. Arquitectura de URLs Amigables
Evita IDs oscuros (`/propiedad/123`). Usa slugs semánticos.
- **Estructura**: `/{transaccion}/{tipo}/{ciudad}/{slug-titulo}`
- **Ejemplo**: `/venta/apartamento/madrid/atico-lujo-gran-via`
- **Generación**: Al crear la propiedad, normaliza el título: `slugify(title)`. Maneja colisiones añadiendo un hash corto al final si es necesario.

## 3. Contenido Dinámico (IA Powered)
Google odia el contenido duplicado.
- **Meta-Description**: No uses "Apartamento en venta".
  - *Generador*: Usa la IA para crear: "Ático exclusivo en Madrid con 3 habitaciones y terraza. Ideal para familias. Vistas a Gran Vía. Precio: ..."
- **Alt Text Automático**: Las imágenes deben tener alt text descriptivo ("Cocina moderna con isla en ático Madrid") para rankear en Google Images.

## 4. Performance Core Web Vitals
- **LCP (Largest Contentful Paint)**: La imagen principal de la propiedad debe usar `priority` en `next/image`.
- **CLS (Cumulative Layout Shift)**: Reserva espacio para el mapa y las imágenes antes de cargar.

## 5. Casos Borde
- **Propiedades Eliminadas**: No devuelvas 404 (Not Found). Devuelve 410 (Gone) o haz 301 Redirect a propiedades similares en la misma zona para no perder el link juice.
- **Paginación**: Usa `rel="canonical"`, `rel="next"`, `rel="prev"` en las listas de búsqueda.
