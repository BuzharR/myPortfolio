# My Portfolio — Frontend Practice Starter

A scaffolded **Next.js + TypeScript + Tailwind CSS + shadcn/ui** project built
for learning and practicing frontend UI. It comes pre-wired with a scalable
folder structure, dark mode, a layout (header/footer), and a few example
components so you can start building right away.

---

## 1. Prerequisites

You need **Node.js 18.18+** (Node 20+ recommended) and **npm**.

Check what you have:

```bash
node --version
npm --version
```

If you don't have Node, download the LTS version from
[nodejs.org](https://nodejs.org/).

---

## 2. Install dependencies

From the project folder, run this once (and again whenever `package.json`
changes):

```bash
npm install
```

This reads `package.json` and downloads everything into the `node_modules/`
folder. `node_modules/` is large and is intentionally **not** committed to git.

---

## 3. Run the dev server

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser. Edit any file under
`src/` and the page updates instantly (hot reload). Press `Ctrl + C` in the
terminal to stop the server.

---

## 4. Available scripts

| Command         | What it does                                            |
| --------------- | ------------------------------------------------------- |
| `npm run dev`   | Start the local development server (hot reload).        |
| `npm run build` | Create an optimized production build.                    |
| `npm run start` | Run the production build locally (run `build` first).   |
| `npm run lint`  | Check the code for problems with ESLint.                |

---

## 5. Project structure

```
src/
├─ app/                      # Routes (App Router). Each folder = a URL.
│  ├─ layout.tsx             # Wraps every page: header, footer, theme, fonts.
│  ├─ page.tsx               # The home page ("/").
│  └─ globals.css            # Global styles + Tailwind + design tokens.
│
├─ components/
│  ├─ ui/                    # shadcn/ui primitives (button, card, input...).
│  ├─ layout/                # Reusable layout pieces (header, footer, container).
│  ├─ common/                # Shared widgets (e.g. dark-mode toggle).
│  └─ providers/             # React context providers (e.g. theme provider).
│
├─ features/                 # Feature-based modules (see features/README.md).
│  └─ showcase/              # Example feature used by the home page.
│
├─ hooks/                    # Reusable React hooks.
├─ lib/                      # Helpers/utilities (e.g. cn() for class names).
├─ config/                   # App config (site name, nav links).
└─ types/                    # Shared TypeScript types.
```

### Where do I put things?

- **A new page?** Add a folder in `src/app/`. For example
  `src/app/about/page.tsx` becomes the `/about` route.
- **A component used everywhere?** Put it in `src/components/`.
- **A component for one feature/page?** Put it in
  `src/features/<feature>/`.
- **A shadcn component?** Add it with the CLI (see below) — it lands in
  `src/components/ui/`.

---

## 6. Adding more shadcn/ui components

Browse components at [ui.shadcn.com](https://ui.shadcn.com/docs/components),
then add one by name. Example:

```bash
npx shadcn@latest add dialog
```

This copies the component into `src/components/ui/` so you fully own and can
edit it. Already included: `button`, `card`, `input`, `label`, `badge`,
`separator`, `avatar`, `dropdown-menu`, `sheet`, `sonner` (toasts),
`skeleton`, `tabs`.

> **Note — this starter uses the Base UI flavor of shadcn/ui** (the current
> default for new projects). It uses a `render` prop instead of Radix's
> `asChild`. If you follow an older tutorial that uses `asChild`, here's the
> translation:
>
> ```tsx
> // Radix (older tutorials)
> <Button asChild>
>   <a href="/docs">Read the docs</a>
> </Button>
>
> // Base UI (this project)
> <Button nativeButton={false} render={<a href="/docs" />}>
>   Read the docs
> </Button>
> ```
>
> On the [shadcn/ui docs](https://ui.shadcn.com/docs/components) you can toggle
> each example between **Radix** and **Base UI** — pick **Base UI** to match
> this project.

---

## 7. Import alias

Use `@/` as a shortcut for the `src/` folder, so you don't write long relative
paths:

```ts
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
```

---

## 8. Useful links

- [Next.js docs](https://nextjs.org/docs)
- [Tailwind CSS docs](https://tailwindcss.com/docs)
- [shadcn/ui docs](https://ui.shadcn.com/docs)
- [TypeScript handbook](https://www.typescriptlang.org/docs/)

Happy building! Start by editing `src/app/page.tsx`.
