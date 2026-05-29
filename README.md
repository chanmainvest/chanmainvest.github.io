# chanmainvest.github.io

Public landing page for **Chanma Investment** — open-source investment research, portfolio analytics, tutorials and market tools.

Live at: <https://chanmainvest.github.io/> and <https://hevangel.com/>

## What's here

A single-page scrollytelling site (vanilla HTML / CSS / JS — no build step) that showcases:

- **About** — quick intro
- **Portfolio Dashboard** — <https://github.com/chanmainvest/portfolio_dashboard>
- **Investment Tutorial** (early draft) — <https://github.com/chanmainvest/tutorial>
- **Trade History** (work in progress) — <https://github.com/chanmainvest/trade_history>
- **Bloomberg Mockup** (work in progress) — <https://github.com/chanmainvest/bloomberg-mockup>
- **Wyandanch Library** — Chinese-translated finance education library: <https://github.com/chanmainvest/wyandanch-library>
- **Reading Library** — English-only investor books and market references: <https://github.com/chanmainvest/reading_library>
- **Pipeline & future work** — Pundit Knowledge Base · YouTube channel
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
  img/trade-history-transactions.png
  img/bloomberg-mockup-des.jpg
  img/wyandanch-library-card.svg
  img/reading-library-card.svg
```

## License

MIT — see [LICENSE](./LICENSE).
