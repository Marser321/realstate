---
name: ui_ux_pro_max
description: Estándares de diseño Vibe Coding, UI Kit y UX para aplicaciones premium y de alto impacto visual.
---

# UI/UX Pro Max

> **Propósito**: Crear interfaces que generen "Wows" inmediatos. Priorizar la estética premium, interactividad fluida y conversión móvil (WhatsApp First).

## 1. Filosofía de Diseño
- **Mobile First = WhatsApp First**: En LATAM, el negocio cierra en WhatsApp. El botón de contacto debe ser flotante, accesible y tentador en móvil.
- **Aesthetic Excellence**: Prohibido el diseño "Bootstrap genérico". Usa sombras suaves, bordes sutiles, glassmorphism y tipografía moderna (Inter, Plus Jakarta Sans).
- **Vibe > Syntax**: Si algo se ve "barato", refactorízalo aunque el código esté limpio.

## 2. Tech Stack Estricto
- **Framework de UI**: Shadcn UI (Radix Primitives + Tailwind).
- **Styling**: Tailwind CSS (Utility-first). Usa clases arbitrarias `[]` solo cuando sea necesario para pixel-perfect.
- **Iconos**: Lucide React.
- **Animaciones**: Framer Motion (para interacciones complejas) o `tailwindcss-animate` (para simples).

## 3. Protocolo de Implementación de Componentes

### Paso 1: Estructura & Tokens
Usa variables CSS para colores. Define tu paleta en `globals.css`.
- `primary`: Color de marca (audaz).
- `muted`: Para fondos secundarios (no uses gris plano #ccc).
- `radius`: Bordes redondeados consistentes (ej. `0.5rem`).

### Paso 2: El "Componente Vibe"
No uses componentes crudos. Envuélvelos en Cards con efectos.
```tsx
<Card className="hover:shadow-lg transition-all duration-300 border-black/5 hover:-translate-y-1">
  <CardHeader>
    <CardTitle className="text-xl font-bold tracking-tight">Propiedad Premium</CardTitle>
  </CardHeader>
  <CardContent>
    ...
  </CardContent>
</Card>
```

### Paso 3: Optimización Móvil
Verifica siempre:
- *Touch Targets*: Mínimo 44px para botones.
- *Sticky CTAs*: Botones de compra/contacto fijos en la parte inferior en pantallas pequeñas.
- *Responsive Grids*: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

## 4. Patrones de Conversión (Smart UX)
- **Micro-interacciones**: Feedback visual al clickear (ripple, scale).
- **Loading Skeletons**: Nunca muestres una pantalla en blanco. Usa `<Skeleton />` de Shadcn.
- **Feedback Loop**: Toasts (Sonner) para confirmar acciones ("Lead enviado con éxito").

## 5. Casos Borde y Accesibilidad
- **Contraste**: Asegura legibilidad.
- **Dark Mode**: Configura `dark:` classes para que se vea increible en modo oscuro.
- **Imágenes**: Usa `next/image` con `blurDataURL` para carga progresiva.
