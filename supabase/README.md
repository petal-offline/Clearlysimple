# ClearlySimple brief delivery

This site is a static export, so secure form handling lives in the Supabase Edge Function at `functions/send-brief`.

Before deployment, apply `migrations/20260723_create_project_briefs.sql` in the Supabase SQL Editor or through the Supabase CLI.

Then add these Edge Function secrets in the Supabase Dashboard:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` — an address on a verified Resend domain
- `BRIEF_NOTIFICATION_EMAIL=clearlysimple.apps@gmail.com`
- `ALLOWED_ORIGINS=https://clearlysimple.app,http://localhost:3000`

Deploy the function with a Supabase access token that has Edge Function write permission:

```powershell
supabase functions deploy send-brief --project-ref taquqmrrygkqftwievkz --use-api
```

After the migration, secrets, and function have been confirmed live, set `NEXT_PUBLIC_BRIEF_DELIVERY_ENABLED=true` in the static site's build environment and rebuild the site.

The static site only uses the public Supabase URL and publishable key. The service-role and Resend keys are used exclusively inside the deployed Edge Function.
