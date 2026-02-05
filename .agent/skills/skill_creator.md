---
name: skill_creator
description: Meta-skill para diseñar y redactar nuevas Skills de alto impacto para el Agente.
---

# Skill Creator (Meta-Skill)

> **Propósito**: Estandarizar la creación de nuevas capacidades (Skills) para asegurar que el Agente pueda replicar procesos complejos de ingeniería, diseño y negocio de forma autónoma y consistente.

## 1. Filosofía de una Skill "Vibe Coding"
Una Skill no es solo documentación manual; es un **algoritmo en lenguaje natural** que el Agente ejecuta. Debe ser:
- **Accionable**: Menos teoría, más pasos imperativos.
- **Contextual**: Explica el "Por qué" antes del "Cómo" para alinear criterio.
- **Robusta**: Incluye siempre manejo de errores y casos borde.

## 2. Estructura Canónica (.md)

Todo archivo `SKILL.md` debe seguir esta estructura:

```markdown
---
name: [nombre-slug-snake-case]
description: [Descripción breve de 1 línea para el router del Agente]
---

# [Nombre Human Ligeable]

> **Propósito**: [Qué logra esta skill y cuál es el resultado final esperado]

## 1. Pasos de Razonamiento (Contexto)
Antes de ejecutar, el Agente debe entender:
- **Criterios de Éxito**: ¿Cómo se ve el trabajo bien hecho?
- **Trampas Comunes**: ¿Qué errores de junior debe evitar?
- **Tech Stack**: Herramientas permitidas (ej. "Usa n8n, no Zapier").

## 2. Protocolo de Ejecución (Paso a Paso)
Instrucciones atómicas y secuenciales.
1. **Análisis**: Qué verificar antes de empezar.
2. **Ejecución**: Comandos, código o acciones específicas.
3. **Verificación**: Cómo auto-corregirse.

## 3. Scripts & Templates
Snippets de código, configuraciones JSON o comandos de terminal listos para copiar/pegar.
- Usa bloques de código con lenguaje especificado.
- Incluye comentarios explicativos.

## 4. Casos Borde y Troubleshooting
- "Si X falla, intenta Y".
- Manejo de límites de API, errores de red, etc.
```

## 3. Proceso de Creación (Workflow)

Para crear una nueva Skill:
1. **Identificar la Repetición**: ¿Qué tarea he explicado ya 3 veces?
2. **Abstraer el Patrón**: ¿Cuáles son los pasos invariables?
3. **Redactar el borrador**: Usa la estructura canónica.
4. **Testear**: Pide al Agente "Ejecuta la tarea X usando la nueva skill Y".
5. **Refinar**: Si el Agente duda, clarifica la instrucción.

## 4. Ejemplo de Prompt para Generar Skills
*"Actúa como Skill Creator. Analiza mi última conversación sobre [Tema]. Extrae los patrones y crea una skill llamada [nombre_skill.md] que guíe a futuros agentes a realizar esto sin supervisión."*
