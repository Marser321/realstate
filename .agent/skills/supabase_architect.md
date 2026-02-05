---
name: supabase_architect
description: Principios de arquitectura, seguridad y diseño de base de datos para Supabase.
---

# Supabase Architect

> **Propósito**: Diseñar esquemas de base de datos escalables, seguros y performantes en Supabase, aprovechando PostgreSQL al máximo.

## 1. Pasos de Razonamiento (Architecture First)
- **RLS by Default**: NUNCA dejes una tabla pública sin Row Level Security. La seguridad es la prioridad #1.
- **Relational Integrity**: Usa Foreign Keys siempre. La consistencia de datos se garantiza en la DB, no en el frontend.
- **Performance**: Índices en columnas de filtrado frecuente.
- **Type Safety**: Generación de tipos de TypeScript automática para sincronizar DB y Frontend.

## 2. Protocolo de Ejecución

### Fase 1: Diseño del Esquema
1. Define las entidades y sus relaciones (1:1, 1:N, N:M).
2. Nombres de tablas en **snake_case** y plural (ej. `users`, `properties`, `leads`).
3. Campos de auditoría obligatorios: `created_at`, `updated_at`.

### Fase 2: Implementación (SQL & Validaciones)
Usa migraciones o el editor SQL para crear tablas.
```sql
create table properties (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  price numeric(12,2) not null,
  is_premium boolean default false,
  owner_id uuid references auth.users(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar RLS
alter table properties enable row level security;
```

### Fase 3: Seguridad (RLS Policies)
Define quién puede ver y editar qué.
- **Select**: `auth.uid() = owner_id` (o `true` para listados públicos).
- **Insert/Update/Delete**: `auth.uid() = owner_id`.
```sql
create policy "Public properties are viewable by everyone"
  on properties for select
  using ( true );

create policy "Users can insert their own properties"
  on properties for insert
  with check ( auth.uid() = owner_id );
```

### Fase 4: Edge Functions & Webhooks
- Usa **Database Webhooks** para disparar automatizaciones (ej. notificar a n8n cuando entra un lead).
- Lógica compleja va en **Edge Functions** (Deno/TypeScript), no en el cliente.

## 3. Snippets Comunes

### Generación de Tipos (Terminal)
```bash
npx supabase gen types typescript --project-id "$PROJECT_ID" --schema public > types/supabase.ts
```

### Trigger para `updated_at`
```sql
create extension if not exists moddatetime schema extensions;

create trigger handle_updated_at before update on properties
  for each row execute procedure moddatetime (updated_at);
```

## 4. Casos Borde
- **Handling Nulls**: Sé explícito con `not null` vs `nullable`.
- **JSONB**: Úsalo para datos flexibles (ej. `features` de una propiedad), pero no abuses si necesitas filtrar por esos campos (o indexa el JSON camino).
- **Storage**: Usa buckets privados con RLS para documentos sensibles.
