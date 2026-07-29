# Northbound

A small static trail guide. Route cards on the home page, field notes on a
second route.

Built with Next.js using `output: "export"`, so `next build` produces a fully
static `out/` directory with no server component. `trailingSlash` is on, which
emits `out/<route>/index.html` rather than `out/<route>.html` so that deep
links resolve when the site is served from an IPFS CID.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # writes ./out
```

## Configuration

| Variable                    | Effect                                  |
| --------------------------- | --------------------------------------- |
| `NEXT_PUBLIC_ACCENT_COLOR`  | Accent colour, baked in at build time.  |

Because the variable is `NEXT_PUBLIC_`, its value is inlined into the built
output. Changing it requires a rebuild, not a restart.
