---
name: n8n-architect
description: Expert guide for generating, validating, and optimizing N8N workflows.
---

# N8N Architect

> **Purpose**: Generate robust, error-free N8N workflow JSONs that are easy to import and use.

## 1. Core Principles (The "Golden Rules")

### A. Stability Over Magic
*   **Avoid "Triggers" for Databases**: In self-hosted/local N8N, Realtime Triggers (like `supabaseTrigger`) often fail or require complex webhooks.
*   **Use Polling**: The "Cron + Fetch" pattern is 100% reliable.
    *   *Pattern*: `Cron (Every X min)` -> `Supabase (Get Rows where processed = false)` -> `Process` -> `Supabase (Update processed = true)`.

### B. Model Agnostic AI (The "Groq Protocol")
*   **Prefer `HTTP Request` over specific AI Nodes**: Native nodes (OpenAI, Anthropic) lock you into providers.
*   **Use Groq via HTTP**: It's faster and cheaper.
    *   **URL**: `https://api.groq.com/openai/v1/chat/completions`
    *   **Method**: `POST`
    *   **Auth**: Header `Authorization: Bearer YOUR_KEY`
    *   **Model**: `llama-3.3-70b-versatile` (or latest).

### C. Syntax Safety
*   **Expressions**: ALWAYS prefix expressions with `=`.
    *   *Wrong*: `{{ $json.id }}`
    *   *Correct*: `={{ $json.id }}`
*   **JSON Structure**: Always wrap nodes in the standard object:
    ```json
    {
      "name": "My Workflow",
      "nodes": [...],
      "connections": {...}
    }
    ```

## 2. Standard Node Patterns

### The "Groq" AI Node
Instead of `n8n-nodes-base.openAi`, use `n8n-nodes-base.httpRequest`:
```json
{
  "parameters": {
    "url": "https://api.groq.com/openai/v1/chat/completions",
    "method": "POST",
    "authentication": "genericCredentialType",
    "genericAuthType": "httpHeaderAuth",
    "sendBody": true,
    "bodyParameters": {
      "parameter": [
        { "name": "model", "value": "llama-3.3-70b-versatile" },
        { "name": "messages", "value": "=[{ \"role\": \"user\", \"content\": \"{{ $json.prompt }}\" }]" }
      ]
    }
  },
  "name": "Groq AI",
  "type": "n8n-nodes-base.httpRequest"
}
```

### The "Supabase Polling" Pattern
1.  **Cron**: Interval.
2.  **Supabase Get**: `Operation: Get Many`, `Limit: 10`, `Filter: status = 'pending'`.
3.  **SplitInBatches** (Optional): If processing heavy items.

## 3. Debugging Import Errors
If the user says "Cannot import":
1.  **Check Expressions**: Did you forget the `=` prefix?
2.  **Check Node Types**: Are you using a node causing version conflicts? (Stick to `n8n-nodes-base`).
3.  **Check JSON Validity**: Is exactly one root object?

## 4. Output Format
When generating a workflow for the user:
1.  **Save as .json file**: Don't just paste code blocks.
2.  **Provide context**: Explain what secrets/credentials (Header Auth, Supabase credentials) they need to set up in N8N.
