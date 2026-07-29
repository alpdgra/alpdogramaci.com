# alpdogramaci.com

My web resume, powered by React.

## Updating the content

Everything shown on the site lives in [`src/schemas/data.js`](src/schemas/data.js).
Edit that one file and the whole page follows — nothing else needs touching.

Content mirrors my [LinkedIn profile](https://www.linkedin.com/in/alp-dogramaci-0b2143265).
LinkedIn blocks automated reads and its public API doesn't expose positions,
education or skills, so the sync is manual: export the profile from LinkedIn
(**More → Save to PDF**, or *Settings → Get a copy of your data*) and copy the
changes across.

A few conventions the components rely on:

- Sections with an empty array are skipped entirely, so `projects: []` hides the
  Projects section rather than rendering a blank card.
- `current: true` on an experience or education marks its timeline dot as an
  ongoing role.
- `highlights` renders as bullets; `details` renders behind a "Show details"
  toggle.

## Running locally

```bash
npm install
npm start      # dev server on http://localhost:3000
npm run build  # production bundle in build/
```

## Notes

- **No external assets.** Icons are inline SVG (`src/components/icon.js`) and the
  type is a system font stack, so nothing is fetched from a CDN at runtime.
- **Theme** follows the OS by default and remembers an explicit choice in
  `localStorage`. An inline script in `public/index.html` applies it before first
  paint to avoid a flash of the wrong theme.
- **The page is the CV.** `@media print` restyles it to black-on-white and spells
  out link targets, so "Save as PDF" prints a clean two-page resume — there's no
  separate PDF file to keep in sync.

Forked from https://github.com/Maaato/react-resume
