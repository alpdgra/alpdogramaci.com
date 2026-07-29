# alpdogramaci.com

Static CV site, deployed on [Cloudflare Pages](https://developers.cloudflare.com/pages/) via the GitHub integration.

No build step, no dependencies — the contents of `public/` are uploaded as-is.

## Layout

```
public/          # everything that gets deployed (the Pages build output directory)
  index.html
  404.html       # served automatically by Pages on unmatched paths
  styles.css
  fonts/         # Inter, self-hosted as variable-weight woff2 subsets
  profile.jpg
  favicon.ico
  robots.txt
  sitemap.xml
  _headers       # security + caching headers applied at the edge
data.js          # legacy content data from the old React version; not deployed
wrangler.toml    # Pages project config (pages_build_output_dir = "public")
```

The page makes **no third-party requests** — no icon font, no CDN, no analytics. Icons are an
inline SVG sprite and Inter is served from `public/fonts/`, which is why the Content-Security-Policy
in `_headers` can be `'self'` throughout.

## Deploying from GitHub

In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick this
repository, and use these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `public` |

`wrangler.toml` already declares `pages_build_output_dir = "public"`, so Cloudflare picks the
output directory up automatically.

Once connected, every push to `main` publishes to production, and pushes to any other branch get a
preview deployment at a `*.pages.dev` URL.

### Custom domain

After the first deployment, add `alpdogramaci.com` (and `www` if wanted) under the project's
**Custom domains** tab. Cloudflare creates the DNS records when the domain is on the same account.

## Local preview

Any static file server works, e.g.:

```sh
npx wrangler pages dev public   # closest to production — applies _headers
python3 -m http.server -d public 8080
```

## Notes

- The sidebar links to `/resume.pdf`, which is not in the repo. Drop the file into `public/` to make
  that link work.
- Adding an external asset (analytics, a CDN script, a hosted font) means widening the CSP in
  `_headers` to match, or the browser will block it.
- `profile.jpg` is a 128×128 placeholder; the avatar renders at 96px, so a 192×192 or larger image
  will look sharper on high-DPI screens.
- Colours are defined once as custom properties at the top of `styles.css`, with a light-mode block
  right below. Changing `--accent` restyles the whole page.
- Print styles are included — the page prints to a single clean page, so "Save as PDF" from the
  browser is a reasonable way to produce `resume.pdf`.
