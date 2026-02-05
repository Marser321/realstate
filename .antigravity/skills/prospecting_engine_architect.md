---
name: prospecting_engine_architect
description: Diseña sistemas automáticos de búsqueda de clientes (Outbound) usando N8N, señales de intención y enriquecimiento de datos.
---

# Prospecting Engine Architect (El Motor de Ventas)

> "No busques agujas en un pajar. Usa un imán."
> Este skill convierte la búsqueda de clientes en una ciencia exacta y automatizada.

## 1. Propósito
Construir máquinas de generación de leads "Always-On" que operan 24/7. Integra scraping, enriquecimiento de datos (Clay/Apollo style) y alcance multicanal, orquestado enteramente por N8N.

## 2. Componentes del Motor

### A. Fuentes de Señales (The Trigger)
El motor no dispara al azar. Dispara basado en **Señales de Intención**:
- **Cambios de Trabajo**: Nuevo VP de Marketing.
- **Tecnología Instalada**: Acaban de instalar HubSpot.
- **Financiación**: Anuncio de Ronda Serie A.
- **Contratación**: Buscando "SEO Manager".
- **Social Listening**: Hashtags o keywords en LinkedIn/Twitter.

### B. Enriquecimiento de Datos (The Waterfall)
No aceptamos datos vacíos. Usamos una "cascada" de proveedores para completar el perfil:
1.  **Scraping Primario**: Web oficial, LinkedIn Company Page.
2.  **API Enrichment**: Apollo, Clearbit, PeopleDataLabs (simulado o integrado).
3.  **AI Research**: Usar LLMs para leer la web del prospecto y extraer "Icebreakers" (Rompehielos) personalizados.

### C. Scoring y Filtrado (The Gatekeeper)
- **ICP Validation**: ¿Cumple con el Perfil de Cliente Ideal? (Tamaño, Industria, Ubicación).
- **Tiering**: Tier 1 (Hiper-personalizado), Tier 2 (Segmentado), Tier 3 (Masivo/Descartar).

### D. Activación (The Outreach)
- **Email Sequencing**: Smartlead/Instantly (vía N8N).
- **LinkedIn Automation**: Conexión + Mensaje.
- **WhatsApp**: Para mercados LATAM ("WhatsApp First").

## 3. Protocolo de Diseño (Workflow Design)

Cuando diseñes un workflow de prospección:

1.  **Definir la "Growth Hypothesis"**: "Si contacto a empresas de [Industria] que usan [Tecnología], ofreciendo [Solución], tendré respuesta".
2.  **Mapear el Flujo de Datos**:
    `Fuente -> Scraping -> Limpieza -> Enriquecimiento -> AI Personalization -> CRM/Outreach`
3.  **Diseñar la Lógica de N8N**:
    - Nodos HTTP Request para APIs.
    - Nodos Code para lógica compleja.
    - Nodos AI Agent para personalización de textos.

## 4. Estrategias de "Vibe Coding" para Outreach

- **Cero "Salesy"**: El copy debe sonar como un consejo de un experto, no un vendedor desesperado.
- **Value First**: Entregar valor en el primer contacto (un análisis, un tip, un recurso).
- **Personalización Radical**: "Vi que publicaste sobre X en LinkedIn..." > "Espero que estés bien".

## 5. Estructura de Salida (Blueprint)

Al crear un motor, entrega:
1.  **Diagrama del Flujo**: Descripción visual de pasos en N8N.
2.  **Data Schema**: Qué campos vamos a capturar (JSON structure).
3.  **Prompts de Personalización**: El prompt exacto para que la IA escriba el email 1-a-1.
4.  **Webhook Strategy**: Cómo entra la data y cómo sale al CRM.

## 6. Prompt Triggers

- `"Diseña un motor de ventas para agencias de marketing"`: Crea un flujo completo targeting agencias.
- `"Crea un workflow de N8N para enriquecer leads de LinkedIn"`: Se enfoca en la parte de data enrichment.
- `"Genera los prompts para personalizar emails en frío basados en la web del cliente"`: Solo la capa de IA.
