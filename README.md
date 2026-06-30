# omarxadel.github.io

Source of [omarxadel.github.io](https://omarxadel.github.io) — Omar Adel's
one-page portfolio. Built with [Astro](https://astro.build) + Tailwind, hosted
as a GitHub Pages static site.

## Stack

- **Astro 3** static site, **Tailwind 3** for styling (`darkMode: 'class'`)
- **Bricolage Grotesque Variable** for UI, **DM Mono** for code and metrics
- Light / dark theme persisted in `localStorage`, hydrated before paint
- Posts authored as MDX under `src/content/posts/`

## Project layout

```
src/
├── components/             one-pager building blocks (Icon, Header, ThemeToggle, …)
├── content/posts/          MDX posts
├── data/                   single source of truth for copy
│   ├── presentation.ts     hero, status pill, nav social links, CTA
│   ├── services.ts         the four "How I work" cards
│   ├── companies.ts        logo strip entries
│   ├── portfolio.ts        Bolder blurb, products, MRR
│   └── site.ts             Cal.com link, collaboration statement
├── layouts/Layout.astro    light/dark shell + theme bootstrap
├── pages/
│   ├── index.astro         the one-pager
│   └── posts/              /posts and /posts/[slug]
└── styles/                 tailwind entry + post.css
```

Edit copy in `src/data/*`; the page reads from those files.

## Asset conventions (`public/`)

Every section gets its own subdirectory so assets travel with their feature.
Names are lowercase **kebab-case** and match the slug used in the data file —
so a company named `Acme Robotics` becomes `acme-robotics.svg`.

```
public/
├── favicon.svg
├── opengraph-image.jpg              1200×630, JPG (social preview)
├── resume.pdf                       linked by the hero CTA
│
├── hero/
│   └── profile.webp                 square avatar, ≥ 416×416
│
├── companies/                       logo strip (Hero → Logo strip section)
│   ├── <slug>.svg                   default mark, single-tone, viewBox 0 0 N 24
│   └── <slug>-dark.svg              optional dark-mode override
│
├── portfolio/                       Bolder + product marks
│   ├── bolder.svg                   parent brand mark
│   ├── bolder-fit.svg               product
│   ├── scailor.svg                  product
│   └── beval-studio.svg             product
│
└── posts/
    └── <post-slug>/                 mirror the MDX slug
        └── <name>.webp
```

### Naming rules

| Rule                                       | Example                          |
| :----------------------------------------- | :------------------------------- |
| kebab-case, lowercase ASCII                | `acme-robotics.svg`              |
| slug matches the data entry it belongs to  | `companies[].name` → `<slug>`    |
| logos: SVG, single-tone, `currentColor`    | tinted via Tailwind text colors  |
| photos / screenshots: WebP first, PNG fallback when transparency is required | `profile.webp`, `og-card.png`    |
| dark-mode override: same name + `-dark`    | `acme.svg` / `acme-dark.svg`     |
| size variants: trailing `@<width>`         | `cover@1920.webp`                |
| never use spaces, underscores, or `Capital Case` | not `Company Logo.PNG`     |

### Wiring assets to data

The data files only hold copy today. To surface a logo, add a `logo` field that
points at the file under `public/` and render it next to the name. Example for
`companies.ts`:

```ts
{ name: "Acme Robotics", logo: "/companies/acme-robotics.svg", href: "https://acme.example" }
```

Same pattern for `portfolio.ts` products (`/portfolio/<slug>.svg`).

## Commands

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `npm install`      | Install dependencies                         |
| `npm run dev`      | Local dev server at `localhost:4321`         |
| `npm run build`    | Build the production site to `./dist/`       |
| `npm run preview`  | Preview the build locally before deploying   |
| `npm run check`    | Type/diagnostic check via `astro check`      |

## Credits

Forked from
[`MaeWolff/astro-portfolio-template`](https://github.com/MaeWolff/astro-portfolio-template)
and rebuilt as a one-pager. The original template is MIT-licensed.
