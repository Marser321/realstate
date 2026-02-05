---
name: business_model_cloner
description: Analiza negocios exitosos (SaaS/Servicios) y replica su estructura técnica, de precios y propuesta de valor.
---

# Business Model Cloner (El Copiador de Negocios)

> "Los grandes artistas copian, los genios roban." - Pablo Picasso (y Steve Jobs).
> Este skill transforma la ingeniería inversa de negocios en un proceso estructurado para replicar el éxito.

## 1. Propósito
Desconstruir sistemáticamente productos digitales exitosos (SaaS Boilerplates, Productized Services, Micro-SaaS) para extraer su "ADN de Éxito" y replicarlo en el proyecto actual. No se trata solo de copiar código, sino de copiar la *lógica de ingresos*.

## 2. Áreas de Análisis (El "Business DNA")

Cuando ejecutes este skill, analizarás 4 dimensiones críticas:

### A. Estructura de Precios (The Offer)
- **Tiering**: Cómo dividen los planes (Free, Pro, Enterprise).
- **Value Metric**: ¿Qué cobran exactamente? (Por usuario, por uso, por feature).
- **Psicología de Precios**: Decoys, anchors, y garantías.

### B. Stack Tecnológico (The Engine)
- **Core Ops**: ¿Qué mueve el negocio? (Airtable, Notion, Supabase, Custom Code).
- **Automation Layer**: ¿Qué está automatizado y qué es manual?
- **Delivery Mechanism**: ¿Cómo recibe valor el cliente? (Dashboard, Email, Reporte PDF).

### C. Adquisición y Conversión (The Funnel)
- **Landing Page Anatomy**: Estructura de la home (Hero -> Pain -> Solution -> Social Proof -> CTA).
- **Lead Magnets**: ¿Qué regalan para capturar emails?
- **Onboarding**: ¿Cómo es el "Time to Value"?

### D. "Vibe" y Branding (The Soul)
- **Tono de Voz**: ¿Profesional, divertido, disruptivo?
- **Estética Visual**: Minimalista, Cyberpunk, Corporate.

## 3. Protocolo de Ejecución

### Fase 1: Extracción (Reverse Engineering)
1.  **Identificar el Target**: URL o nombre del negocio a analizar.
2.  **Análisis de Superficie**: Usar `search_web` y navegación para mapear features y precios.
3.  **Análisis Técnico**: Inferir el stack (Wappalyzer mental) basado en endpoints, comportamientos y headers.

### Fase 2: Adaptación (Contextualization)
1.  **Gap Analysis**: ¿Qué tiene el target que nos falta?
2.  **Market Fit**: ¿Cómo adaptamos esto al mercado LATAM? (Ej. Precios en paridad de poder adquisitivo, WhatsApp integration).
3.  **Simplificación**: ¿Cuál es el MVP de este modelo? (El 20% que da el 80% del valor).

### Fase 3: Implementación (Cloning)
1.  **Schema Replication**: Generar el esquema de BD (Supabase) necesario para soportar este modelo.
2.  **Automation Blueprint**: Diseñar los workflows de n8n requeridos.
3.  **Copywriting Synthesis**: Generar textos para la Landing Page inspirados en el original pero mejorados.

## 4. Prompt Triggers (Comandos)

- `"Clona el modelo de negocio de [Empresa X] para mi nicho"`: Ejecuta un análisis completo y propone un plan de implementación.
- `"Analiza el pricing de [Empresa X] y adáptalo a LATAM"`: Se enfoca solo en la estrategia de monetización.
- `"¿Cómo opera [Empresa X] técnicamente? Replícalo"`: Se enfoca en la arquitectura y automatización.
- `"Crea un MVP inspirado en [Empresa X]"`: Genera un plan de acción lean.

## 5. Salidas Esperadas
Al finalizar, debes entregar:
1.  **Tabla de Precios**: Definición clara de planes.
2.  **Arquitectura de Datos**: `tables.sql` para Supabase.
3.  **User Journey Map**: Flujo desde visita hasta pago.
4.  **Feature List Priorizada**: Qué construir primero.
