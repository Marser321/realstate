---
name: Skill Creator
description: The Architect of Skills. Generates structured skill definitions to automate repetitive tasks and encapsulate knowledge.
---

# Skill Creator (El Arquitecto de Habilidades)

## Propósito
Permitir que Antigravity analice el proyecto y genere nuevas skills automáticamente cuando detecte tareas repetitivas o cuando el usuario lo solicite explícitamente. Esta skill asegura que el sistema sea evolutivo y flexible.

## Trigger (Cuándo usarla)
- **Explícito**: Cuando el usuario dice "Crea una Skill para X" o "Enséñate a ti mismo a hacer X".
- **Implícito**: Cuando detectas que has realizado la misma secuencia de comandos complejo o razonamiento más de 3 veces.
- **Innovación**: Cuando encuentras un patrón de arquitectura o diseño que debería estandarizarse (ej. "Patrón de Componentes UI con Motion").

## Instrucciones Paso a Paso

1.  **Análisis de Intención**:
    - ¿Qué problema resuelve esta skill?
    - ¿Cuáles son los inputs necesarios?
    - ¿Cuál es el resultado esperado (Artifact, Code Change, Analysis)?

2.  **Estructura del Archivo**:
    - Genera un archivo `.md` en `.antigravity/skills/` (o `.agent/skills/` según configuración).
    - Usa Frontmatter YAML:
      ```yaml
      ---
      name: [Nombre de la Skill]
      description: [Breve descripción]
      ---
      ```

3.  **Contenido Obligatorio**:
    - **# [Nombre de la Skill]**: Título claro.
    - **## Propósito**: El "Por qué".
    - **## Contexto Ideal**: Cuándo es más efectivo usarla.
    - **## Pasos de Razonamiento**: La cadena de pensamiento que el agente debe seguir.
    - **## Protocolo de Ejecución**: Comandos exactos, plantillas de código o estructuras de archivos.
    - **## Casos Borde**: Qué hacer si algo falla (ej. "Si la API de Supabase falla, usa este mock").

4.  **Validación**:
    - Revisa que la skill no sea redundante con skills existentes.
    - Asegura que el tono sea "Vibe Coding" (Latam market fit, pragmático).

## Ejemplo de Generación

**Input Usuario**: "Crea una skill para generar componentes de Shadcn animados".

**Output Generado** (`.antigravity/skills/shadcn_animator.md`):

```markdown
---
name: Shadcn Animator
description: Genera componentes de UI con micro-interacciones de framer-motion.
---

# Shadcn Animator

## Propósito
Elevar la UX estándar de Shadcn añadiendo capas de "Jugo" (Juice/Feel) con `framer-motion` sin romper la accesibilidad.

## Pasos
1. Importar `motion` de `framer-motion`.
2. Convertir componentes primitivos (ej. `div`) en `motion.div`.
3. Aplicar variantes estándar: `fadeIn`, `slideUp`, `scaleIn`.

## Snippets
...
```
