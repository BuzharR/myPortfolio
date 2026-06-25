# Features

This folder holds **feature-based modules**. Instead of scattering a feature's
code across many top-level folders, keep everything a feature needs in one place:

```
features/
  projects/                # one folder per feature
    components/            # components only this feature uses
    data.ts               # static data / mock data
    hooks.ts              # hooks only this feature uses (optional)
    types.ts              # types only this feature uses (optional)
```

### When to use `features/` vs `components/`

- Put something in `src/components/` if it is **shared** across many pages
  (e.g. layout, buttons, the shadcn `ui/` primitives).
- Put something in `src/features/<name>/` if it belongs to **one specific
  feature or page** (e.g. a checkout form, a dashboard chart).

This keeps the project easy to navigate as it grows. Start simple, and only
extract things into `components/` once you reuse them in more than one place.
