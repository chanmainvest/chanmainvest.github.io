# chanmainvest.github.io

Public landing page for **Chanma Investment** — open-source investment research, portfolio analytics, tutorials and market tools.

Live at: <https://chanmainvest.github.io/> and <https://hevangel.com/>

Demo buttons are host-aware: on GitHub Pages they open the matching project at `chanmainvest.github.io/<repo>/`; on `hevangel.com` they open the git submodules checked out beside this landing page.

## What's here

A single-page scrollytelling site (vanilla HTML / CSS / JS — no build step) that showcases:

- **About** — quick intro
- **Portfolio Dashboard** — <https://github.com/chanmainvest/portfolio_dashboard>
- **Investment Tutorial** (early draft) — <https://github.com/chanmainvest/tutorial>
- **Trade History** (work in progress) — <https://github.com/chanmainvest/trade_history>
- **Bloomberg Mockup** (work in progress) — <https://github.com/chanmainvest/bloomberg-mockup>
- **Paper Library** — investment & finance academic papers with on-device RAG chatbot: <https://github.com/chanmainvest/paper_library>
- **Wyandanch Library** — Chinese-translated finance education library: <https://github.com/chanmainvest/wyandanch-library>
- **Reading Library** — English-only investor books and market references: <https://github.com/chanmainvest/reading_library>
- **In Gold We Trust Library** (work in progress) — annual gold reports converted to markdown: <https://github.com/chanmainvest/ingoldwetrust_library>
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
_config.yml          # keeps GitHub Pages from publishing submodule trees
.gitmodules
assets/
  css/styles.css
  js/main.js         # rewrites demo hrefs for github.io vs hevangel.com
  js/i18n.js
  img/…
portfolio_dashboard/ # submodule (hevangel.com only)
tutorial/            # submodule; site is tutorial/docs/
bloomberg-mockup/    # submodule
paper_library/       # submodule
wyandanch-library/   # submodule; site is wyandanch-library/docs/
reading_library/     # submodule
```

After clone on `hevangel.com`:

```pwsh
git submodule update --init --depth 1
```

## License

MIT — see [LICENSE](./LICENSE).
