# Project Organization Rules

This repo hosts multiple app websites in one Next.js App Router codebase.

## New App Website

When asked to create a new website for an app, treat the requested app name or file name as the route name unless the user gives an exact path.

- Convert the name to a lowercase kebab-case slug.
- Create the route at `app/<slug>/`.
- Put the main page in `app/<slug>/page.tsx`.
- Add `app/<slug>/layout.tsx` only when that route needs route-specific metadata or wrappers.
- Keep route-only files inside the route folder.

Recommended route folder shape:

```text
app/<slug>/
  page.tsx
  _components/
  _data/
  _lib/
  _hooks/
  _types/
```

Use only the folders that are needed.

## File Placement

- Place components used by only one app in `app/<slug>/_components/`.
- Place data used by only one app in `app/<slug>/_data/`.
- Place helpers used by only one app in `app/<slug>/_lib/`.
- Place hooks used by only one app in `app/<slug>/_hooks/`.
- Place TypeScript types used by only one app in `app/<slug>/_types/`.
- Place reusable components used by multiple routes in `components/`.
- Place reusable helpers used by multiple routes in `lib/`.
- Place shared data used by multiple routes in `app/data/`.

## Assets

- Put assets for one app in `public/apps/<slug>/`.
- Put globally shared assets directly in `public/` or a clear shared subfolder.
- Do not mix assets from different apps in the same app asset folder.

## Imports

- Use the existing `@/` path alias for imports.
- Import app-private files from their route folder.
- Import shared code from `components/`, `lib/`, or `app/data/`.

## Naming

- Route folders use kebab-case: `app/recipe-planner/`.
- Component files use kebab-case: `hero-section.tsx`.
- Component exports use PascalCase: `HeroSection`.
- Data, helper, hook, and type files use clear purpose names.

## Promotion Rule

Start new code inside the app route folder. Move code to shared folders only after another route needs it too.

## Existing Routes

Keep top-level legal and site routes separate from app websites:

- `app/page.tsx`
- `app/faq/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
