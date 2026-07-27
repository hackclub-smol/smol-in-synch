# In Synch

The website for **In Synch**, a Hack Club YSWS: you ship an app two people can use at the
same time, built with [AutomergeKISS](https://github.com/l3gacyb3ta/automergekiss).

Static site — `index.html` plus `assets/style.css`. No build step, no dependencies.

- `assets/smol.js` — from the smol template, with one change: it assigns the submit URL to
  every `#submit-button, .submit-link` on the page instead of a single element, so the site
  can have a button above the fold and one at the bottom. Endpoint and slug (`in-synch`
  from `smol.json`) are untouched, so submissions still reach the Smol dashboard.
- `assets/brief.js` — the "what counts as a ship" checkboxes, persisted to localStorage
  under `in-synch:brief`, plus the live tally and its Clear button. Progressive
  enhancement: without JS the boxes still tick, they just forget on reload.
- `assets/og.html` → `assets/og.png` — the Open Graph card. The HTML is the source; the
  PNG is what gets embedded. Edit the HTML, then regenerate (see below).

The page includes a ten-step AutomergeKISS tutorial that ends in a complete, runnable
collaborative app.

## Before it goes live

- [ ] `#in-synch` exists on the Hack Club Slack
- [ ] Swap the Open Graph paths in `index.html` for absolute URLs and add `og:url`, once
      the domain exists. The current root-relative paths embed fine in Slack, Discord,
      Facebook and LinkedIn; X/Twitter wants absolute.
- [ ] Get your sponsor to spin it up on Vercel

## Local preview

```bash
python3 -m http.server 8000
```

## Regenerating the Open Graph image

Renders `assets/og.html` at exactly 1200×630. Any headless Chromium works; adjust the path
to the binary if yours differs.

```bash
"/Applications/Chromium.app/Contents/MacOS/Chromium" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --screenshot=assets/og.png "file://$PWD/assets/og.html"
```

## House style

Arcade house style, placard mode. Three hues, each one a legend entry: red = your edits,
blue = their edits, yellow = what Hack Club ships back. No shadows, no rounded corners, no
gradients (dither and hatch instead), no webfonts, no utility classes. If you extend the
page, keep the class names domain nouns and separate regions with 1px rules rather than
cards.

Form AMK-01 · rev 2026-07-27.
