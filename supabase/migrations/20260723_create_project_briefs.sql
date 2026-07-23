create extension if not exists pgcrypto;

create table if not exists public.project_briefs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  whatsapp_number text,
  company text,
  contact_method text not null check (contact_method in ('Email', 'WhatsApp')),
  project_type text not null,
  idea text not null,
  audience text not null,
  outcome text,
  features text[] not null default '{}',
  materials text[] not null default '{}',
  timeline text not null,
  budget_index smallint not null check (budget_index between 0 and 4),
  budget_label text not null,
  estimate_low_k integer not null,
  estimate_high_k integer not null,
  consented_at timestamptz not null,
  notification_status text not null default 'pending' check (notification_status in ('pending', 'sent', 'failed'))
);

create index if not exists project_briefs_created_at_idx on public.project_briefs (created_at desc);
create index if not exists project_briefs_notification_status_idx on public.project_briefs (notification_status);

alter table public.project_briefs enable row level security;

revoke all on table public.project_briefs from anon, authenticated;
