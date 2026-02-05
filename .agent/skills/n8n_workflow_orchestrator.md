---
name: n8n_workflow_orchestrator
description: Lógica de orquestación para flujos de automatización en N8N (Lead Distribution, Notificaciones, Pagos).
---

# N8N Workflow Orchestrator

> **Propósito**: Definir la lógica de negocio que vive fuera del código (en N8N). Conectar el "mundo real" (WhatsApp, CRM, Email) con nuestra App.

## 1. El Cerebro de Operaciones
N8N actúa como el **Backend de Automatización**. La App (Next.js/Supabase) solo dispara eventos; N8N decide qué hacer.
- **Desacoplamiento**: La App no necesita saber *cómo* se envía un WhatsApp, solo que *debe* enviarse.

## 2. Flujo Principal: `lead_distribution`

### Trigger (Disparador)
- **Tipo**: Webhook (POST)
- **Endpoint**: `https://[n8n-instance]/webhook/lead_distribution`
- **Payload Esperado**:
  ```json
  {
    "lead_id": "uuid",
    "property_id": "uuid",
    "user_name": "Mario Link",
    "user_phone": "+54911...",
    "message": "Me interesa...",
    "is_premium_property": true,
    "agent_phone": "+54911..."
  }
  ```

### Lógica de Decisión (Logic Node)
*¿Es Propiedad Premium?*
- **Sí (`is_premium: true`)**:
  - **Acción A**: Enviar WhatsApp inmediato al Agente (vía Twilio/Meta API).
    - *Template*: "🔔 ¡Lead Hot! [Nombre] quiere ver tu propiedad Premium. Contactar: wa.me/[user_phone]"
  - **Acción B**: Guardar en CRM (HubSpot/Airtable) con etiqueta "VIP".
- **No (`is_premium: false`)**:
  - **Acción A**: Enviar Email al Agente (Resumen diario o inmediato vía SMTP/Gmail).
  - **Acción B**: Enviar WhatsApp automático al Usuario: "Gracias por contactar, el agente te responderá pronto."

## 3. Integración Técnica (Instrucciones para Agente)

### Cómo llamar al Webhook desde Supabase Edge Function
```typescript
await fetch('https://[n8n-instance]/webhook/lead_distribution', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(record)
})
```

### Seguridad
- Validar un `x-api-key` en los headers del webhook para evitar spam.

## 4. Casos Borde
- **Fallo de N8N**: Si el webhook da error 500, la Edge Function debe reintentar (retry policy) o loguear el error en `automation_errors` table.
- **Teléfonos Inválidos**: Normalizar números en la Edge Function antes de enviar (E.164 format).
