# Mantis

**Creating the software you know you need.**

Marketing site for Mantis — custom systems that live on your hardware and bend to how you actually work.

## Live site

👉 **https://jibraanjhandir1-code.github.io/mantis-site/**

Hosted on GitHub Pages from the `master` branch. `index.html` redirects to `MANTIS.html`, the single-file site (HTML + CSS + JS, with an embedded 3D mantis model rendered via three.js).

## Running locally

No build step. Either open `MANTIS.html` directly in a browser, or serve the folder:

```
node serve-mantis.js
```

## Structure

- `MANTIS.html` — the live site (everything inlined, including the 3D model)
- `index.html` — GitHub Pages entry point (redirects to `MANTIS.html`)
- `models/` — source `.glb` 3D models
