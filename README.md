# alpdogramaci.com

Static CV site, deployed on [Cloudflare Pages](https://developers.cloudflare.com/pages/) via the GitHub integration.

No build step, no dependencies — the contents of `public/` are uploaded as-is.

## Layout

```
public/          # everything that gets deployed (the Pages build output directory)
  index.html
  404.html       # served automatically by Pages on unmatched paths
  styles.css
  fonts/         # IBM Plex Sans + Plex Mono, self-hosted woff2 latin subsets
  profile.jpg
  favicon.ico
  resume.pdf     # generated from this page's print stylesheet
  robots.txt
  sitemap.xml
  _headers       # security + caching headers applied at the edge
data.js          # legacy content data from the old React version; not deployed
wrangler.toml    # Pages project config (pages_build_output_dir = "public")
```

The page makes **no third-party requests** — no icon font, no CDN, no analytics. Type is served from
`public/fonts/`, which is why the Content-Security-Policy in `_headers` can be `'self'` throughout.

## Design notes

The page is set as a printed document: IBM Plex Mono for the name, section labels and all metadata,
IBM Plex Sans for prose, and hairline rules instead of cards or boxes. Dates sit in a left gutter
that lines up with the section labels, so the whole page shares one vertical edge. Current roles are
marked `now` in the accent red.

Everything is driven by the custom properties at the top of `styles.css` — `--accent` recolours the
page, `--gutter` moves the date column, and the `prefers-color-scheme: dark` block re-tints to a
warm dark without changing any layout.

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

- `public/resume.pdf` is generated from this page's own print stylesheet, so the PDF and the site
  never drift apart. Regenerate it after a content change by printing the page to PDF (A4), or with
  Playwright: `page.pdf({ format: 'A4', printBackground: true })` against a local server.
- Adding an external asset (analytics, a CDN script, a hosted font) means widening the CSP in
  `_headers` to match, or the browser will block it.
- `profile.jpg` is 200×200, which is why the portrait is capped at 9.5rem — any wider and the browser
  upscales it. Replacing it with a 720×900 (or square 800×800) source lets that cap go back up and
  renders sharply on high-DPI screens.
- Print styles are included: the CV prints to two A4 pages with entries kept whole, so "Save as PDF"
  from the browser is a reasonable way to produce `resume.pdf`.
