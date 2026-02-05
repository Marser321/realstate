---
name: n8n_mcp_bridge
description: Permite a Antigravity crear, editar, depurar y ejecutar workflows de N8N directamente mediante integración MCP.
---

# N8N MCP Bridge (El Conector Supremo)

> "Control total. Sin salir del chat."
> Este skill otorga al Agente manos reales para operar la infraestructura de automatización N8N.

## 1. Propósito
Eliminar la barrera entre el Agente (Pensamiento) y N8N (Ejecución). Permite que el Agente no solo *diseñe* workflows en texto, sino que *interactúe* con la instancia de N8N en tiempo real para implementar soluciones de automatización.

## 2. Capacidades del Puente

Gracias al servidor MCP de N8N (`n8n-mcp`), ahora puedes:
- **Listar Workflows**: Ver qué automatizaciones existen.
- **Leer Workflows**: Analizar el JSON de un flujo específico para entender su lógica.
- **Activar Workflows**: Disparar automatizaciones manualmente (vía Webhook o ID).
- **Obtener Templates**: Buscar en la librería de N8N patrones pre-construidos.

*(Nota: La creación/edición directa vía API puede estar limitada por el servidor MCP actual, por lo que priorizamos la generación de JSON para importación manual o el uso de herramientas disponibles).*

## 3. Protocolo de Operación

### Modo Consultor (Read & Debug)
1.  **List**: `n8n_mcp_list_workflows` -> Obtener panorama.
2.  **Inspect**: `n8n_mcp_get_workflow_nodes` -> Ver la lógica interna.
3.  **Diagnose**: Analizar por qué falló una ejecución o cómo optimizarla.

### Modo Arquitecto (Create & Edit)
1.  **Design**: Crear la estructura del workflow en formato JSON compatible con N8N.
2.  **Generate**: Entregar al usuario el JSON listo para "Copiar y Pegar" en el editor de N8N (si la herramienta de creación directa no está disponible).
3.  **Activate**: Si existe un Webhook de prueba, dispararlo para validar.

## 4. Patrones de Integración (The "Glue")

### Webhook Pattern
La forma estándar de conectar el Agente con N8N.
- El Agente hace un `POST` a una URL de webhook de N8N.
- N8N ejecuta una tarea compleja (Scraping, DB insert, Email).
- N8N devuelve el resultado al Agente (o a la DB).

### Database Polling Pattern
- El Agente escribe una instrucción en Supabase (tabla `tasks`).
- N8N monitorea esa tabla y ejecuta cuando hay cambios.
- Ideal para tareas asíncronas largas.

## 5. Estructura de JSON N8N
Cuando generes código para N8N, recuerda la estructura canónica:
```json
{
  "nodes": [ ... ],
  "connections": { ... },
  "settings": { ... }
}
```
*Siempre valida que el JSON sea válido antes de entregarlo.*

## 6. Prompt Triggers

- `"Lista mis workflows de N8N activos"`: Inventory check.
- `"Ejecuta el workflow de Enriquecimiento para el dominio X"`: Trigger manual.
- `"Dame el JSON para un workflow que guarde leads de Typeform en Supabase"`: Generación de código.
- `"Debuggea este error en mi workflow..."`: Análisis de logs (si están disponibles).
