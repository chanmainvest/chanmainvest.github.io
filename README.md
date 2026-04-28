# chanmainvest.github.io

Public landing page for **Chanma Investment** — open-source investment research, portfolio analytics and tutorials.

Live at: <https://chanmainvest.github.io/> and <https://hevangel.com/>

## What's here

A single-page scrollytelling site (vanilla HTML / CSS / JS — no build step) that showcases:

- **About** — quick intro
- **Portfolio Dashboard** — <https://github.com/chanmainvest/portfolio_dashboard>
- **Investment Tutorial** (early draft) — <https://github.com/chanmainvest/tutorial>
- **In the pipeline** — Trade History & P&L · Pundit Knowledge Base · YouTube channel
- **Newsletter & support** — Substack (free) · Patreon (member tiers)
- **Contact** — hevangel.com · email · GitHub

Features:

- Hamburger nav drawer (top-left)
- Theme toggle: dark / light (top-right)
- 4-language toggle: English · 香港 · 台灣 · 中国 (top-right)
- Sticky scrollytelling for the showcased projects
- Fully responsive, no framework, no tracking

## Local preview

```pwsh
# Any static server works. Example with Python:
python -m http.server 8080
# then open http://localhost:8080/
```

## Structure

```
index.html
assets/
  css/styles.css
  js/main.js
  js/i18n.js
  img/avatar.jpg
  img/dashboard-screenshot.png
  img/tutorial-screenshot.png
```

## License

MIT — see [LICENSE](./LICENSE).
