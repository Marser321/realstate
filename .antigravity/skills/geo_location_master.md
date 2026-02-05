---
name: Geo Location Master
description: Expert in interactive maps, clustering, and geo-spatial UI interactions.
---

# Geo Location Master (El Experto en Mapas)

## Propósito
Integrar mapas interactivos potentes. Sin mapa, no hay inmobiliaria. El usuario debe poder explorar el barrio, no solo la casa.

## Contexto Ideal
- Páginas de resultados de búsqueda.
- Ficha de detalle de propiedad (Vista de barrio).
- Mapas de "Lifestyle" (Puntos de interés cercanos).

## Instrucciones y Protocolo

1.  **Tecnología**:
    - Preferencia: **Leaflet** (con `react-leaflet`) para control total y gratuidad, o **Google Maps API** si el cliente paga.
    - Tiles: Usa estilos personalizados (ej. Mapbox Dark o Light) para que coincida con el UI Luxury. No uses el mapa default de OpenStreetMap crudo.

2.  **Clustering**:
    - **Obligatorio**: Si hay más de 50 propiedades, agrupa los marcadores.
    - Usa librerías como `react-leaflet-cluster` o `supercluster`.
    - Los clusters deben mostrar el número de propiedades y cambiar de color según densidad.

3.  **Interacción Bidireccional (Two-Way Binding)**:
    - **Hover List -> Highlight Map**: Al pasar el mouse por una tarjeta en la lista, el pin correspondiente en el mapa debe resaltar (crecer, cambiar de color, rebotar).
    - **Click Map -> Scroll List**: Al hacer clic en un pin, la lista lateral debe hacer scroll hasta la tarjeta correspondiente.

4.  **Optimizaciones de Carga**:
    - Carga el mapa dinámicamente (`next/dynamic`, `ssr: false`) ya que Leaflet requiere `window`.

## Ejemplo de Lógica (Sync Hover)

```tsx
// State global o de contexto
const [activePropertyId, setActivePropertyId] = useState<string | null>(null);

// Card Component
<div 
  onMouseEnter={() => setActivePropertyId(prop.id)}
  onMouseLeave={() => setActivePropertyId(null)}
  className={cn("card-base", activePropertyId === prop.id && "ring-2 ring-primary")}
>
...
</div>

// Map Marker Component
<Marker 
  position={pos} 
  icon={activePropertyId === prop.id ? activeIcon : defaultIcon}
/>
```
