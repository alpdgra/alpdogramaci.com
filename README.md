# alpdogramaci.com

Static CV site. Plain HTML and CSS at the repo root, served by GitHub Pages from `main`, with
`CNAME` binding the custom domain. No build step, no dependencies — push and it's live.

```
index.html     # the CV
404.html
styles.css
fonts/         # IBM Plex Sans + Plex Mono, self-hosted woff2 latin subsets
profile.jpg
resume.pdf     # generated from this page's own print stylesheet
favicon.ico
robots.txt
sitemap.xml
CNAME          # custom domain for GitHub Pages
.nojekyll      # serve files as-is, skip Jekyll processing
```

The page makes **no third-party requests** — no icon font, no CDN, no analytics. Type is served from
`fonts/`, so the Content-Security-Policy in `index.html` is `'self'` throughout. Widen it if you add
an external script, font or image, or the browser will block it.

## Editing

Content is written directly in `index.html`. Colours, spacing and type are the custom properties at
the top of `styles.css`: `--accent` recolours the page, `--gutter` moves the date column, and the
`prefers-color-scheme: dark` block re-tints to a warm dark without changing layout.

Regenerate `resume.pdf` after a content change by printing the page to PDF at A4 — the print
stylesheet is what produces it, so the document and the site stay in step.

## Local preview

```sh
python3 -m http.server 8000
```

## Notes

- `index.html` uses relative asset paths so it also works from a `github.io` subpath; `404.html`
  uses absolute ones because it gets served for arbitrary URLs.
- `profile.jpg` is 200×200, which is why the portrait is capped at 9.5rem — any wider and the browser
  upscales it. Drop in an 800×800 source and that cap can go back up.
