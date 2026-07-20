# lazo-share

Public web pages for Lazo share links (GitHub Pages).

- `share/index.html` — the share redeem page. Reads the token from the URL
  fragment (`/share#<token>` — the fragment never reaches servers or logs),
  POSTs it to the `redeem-share-link` Supabase Edge Function, and renders the
  permission-gated payload. Append `?env=dev` before the `#` to hit the dev
  project while testing.
- `index.html` — placeholder landing page.
- `CNAME` — custom domain (lazo.co).

This repo is public (required for free GitHub Pages); it contains no secrets —
the Supabase project URLs are public identifiers, and redeem-share-link
authorizes purely by share token.
