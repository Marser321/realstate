---
name: regression-guard
description: Protocolo para proteger código estable ("Green Zones") de regresiones causadas por iteraciones rápidas o prompts vagos.
---

# Regression Guard: El Escudo de Calidad

> **Propósito**: Evitar que "pisemos lo que ya funciona". Cuando el Agente entra en modo "Vibe Coding" o iteración rápida, este protocolo actúa como un seguro contra la degradación de funcionalidades aprobadas.

## 1. Concepto: Zonas de Estabilidad

Clasificamos los archivos o bloques de código en dos zonas:

### 🟢 Zona Verde (Green Zone) - **LOCKED**
- **Definición**: Código que ha sido validado visual y funcionalmente por el Usuario. "Esto quedó joya, no se toca".
- **Marca**: Añadir comentario en la cabecera del archivo o encima del bloque:
  `// @regression-guard-locked: Visual approved by User`
- **Regla de Oro**: El Agente **NO** puede modificar este código basándose en prompts genéricos (ej. "mejora el diseño").
- **Excepción**: Solo se modifica si el prompt incluye explícitamente:
  - "Override Guard"
  - "Refactoriza el componente locked [Nombre]"
  - "Hotfix crítico"

### 🟡 Zona Amarilla (Yellow Zone) - **OPEN**
- **Definición**: Código experimental, nuevos features, o refactorizaciones en curso.
- **Regla**: Se permite iteración libre y agresiva. Vibe Coding habilitado al 100%.

## 2. Protocolo de Ejecución para el Agente

Antes de editar CUALQUIER archivo:

1.  **Scan**: Lee las primeras 20 líneas del archivo.
2.  **Detect**: ¿Existe el tag `// @regression-guard-locked`?
3.  **Decide**:
    *   **SI** existe y el prompt NO es específico -> **STOP**.
        *   Notifica al usuario: "Este archivo está protegido. ¿Confirmas que quieres editarlo?"
    *   **SI** existe y el prompt ES específico (override) -> **PROCEED** con cautela.
    *   **NO** existe -> **PROCEED** (Vibe Coding habitual).

## 3. Comandos de Activación

El usuario o el agente pueden invocar este skill para "congelar" el estado actual.

- **"Bloquea esto" / "Quedó perfecto"**:
  - Acción: Agregar `// @regression-guard-locked: [Timestamp]` al archivo activo.
- **"Nueva iteración sobre X"**:
  - Acción: Si X está bloqueado, preguntar si se debe desbloquear o crear una copia (Fork).

## 4. Estrategia de "Capas" (CSS/Styles)

Para cambios de diseño que no rompan estructura:

- Si un componente .tsx está **Locked**, pero se pide cambio de color:
  - **NO** tocar el .tsx.
  - Intentar modificar solo el archivo CSS global o tailwind.config si es seguro, O mejor:
  - Proponer un `wrapper` o una nueva variante en un archivo separado.

## 5. Ejemplo de Header Protegido

```tsx
// @regression-guard-locked: Visual approved by User. Do not modify layout without override.
import React from 'react';

export const Hero = () => {
  return (
    <section className="h-screen bg-black">
        {/* Estructura compleja que costó mucho alinear */}
    </section>
  )
}
```

## 6. Sinergia con otros Skills

- **tdd-workflow**: Los tests deben pasar antes de bloquear un archivo.
- **clean-code**: No bloquear código sucio. Refactorizar antes de poner el candado.
