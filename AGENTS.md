# AGENTS.md

This repository is the public landing page for Chanma Investment.

The purpose of this file is to give the next AI agent enough context to make changes without re-discovering the implementation choices from scratch.

## Quick Rules

- Keep the site static: no framework, no build step, no package manager.
- Preserve the single-page scrollytelling structure unless the user explicitly asks to change it.
- Update `index.html`, `assets/css/styles.css`, `assets/js/main.js`, and `assets/js/i18n.js` together when a feature crosses structure, styling, interaction, and copy.
- Maintain 4-language support: `en`, `hk`, `tw`, `cn`.
- Hong Kong copy should read like formal Hong Kong financial/news prose, not colloquial Cantonese.
- English page states should use English screenshots; Chinese page states should use Chinese screenshots where available.
- The dashboard showcase intentionally uses three visuals: dashboard overview first, positions/portfolio next, correlation later.
- The tutorial showcase should use two visuals: course overview first, Week 1 interactive chart later, and remain clearly positioned as a first draft.
- The top-bar language buttons use real flag image assets; do not revert to text pills or obviously inaccurate CSS flag drawings.
- Validate language toggle, theme toggle, sticky visuals, and mobile layout after substantive edits.

## Product intent

- This site is the landing page for both `chanmainvest.github.io` and `hevangel.com`.
- It is a single-page scrollytelling site that introduces the person behind Chanma Investment, showcases live projects, and leaves room for future projects.
- The tone should stay professional, investment-focused, and credible.
- The visual language should feel intentional and editorial rather than generic startup landing-page boilerplate.

## Technology choices

- No framework.
- No build step.
- No package manager.
- No transpilation.
- Plain static assets only:
  - `index.html`
  - `assets/css/styles.css`
  - `assets/js/main.js`
  - `assets/js/i18n.js`
  - images under `assets/img/`
- Google Fonts are loaded directly from the HTML.
- The site is expected to work by opening the static files directly or serving them from any static host.

## Why this stack was chosen

- GitHub Pages compatibility with zero build tooling.
- Easy manual deployment to `hevangel.com` via nginx document root.
- Low-maintenance editing for future content-heavy updates.
- Fast loading and minimal operational complexity.

## Page structure

The page is intentionally organized as a single long-form story:

1. Hero / About
2. Portfolio Dashboard showcase
3. Investment Tutorial showcase
4. Pipeline / future projects
5. Newsletter and support
6. Contact and disclaimer

Keep this order unless the user explicitly asks to change the narrative flow.

## UX decisions to preserve

- Top-left hamburger button opens a side navigation drawer.
- Top-right controls contain:
  - language switcher
  - theme toggle
- The site supports light and dark mode.
- The site supports four languages:
  - English (`en`)
  - Hong Kong Traditional Chinese (`hk`)
  - Taiwan Traditional Chinese (`tw`)
  - Mainland Simplified Chinese (`cn`)
- Language and theme are persisted in `localStorage`.
- First-load defaults are inferred from browser language and color-scheme preference.

## Design decisions to preserve

- The site is not meant to look like a SaaS dashboard homepage.
- It should feel like a polished personal investment research brand.
- The current art direction uses:
  - deep navy backgrounds
  - gold accent color
  - soft grid/radial background treatments
  - rounded device-frame mockups for showcase screenshots
- The hero uses the GitHub avatar image for now, which is the dog photo.
- The project sections use sticky visuals paired with scrolling copy.

## Current implementation notes

- The top-bar language buttons use local flag image assets:
  - `assets/img/flag-us.svg`
  - `assets/img/flag-hk.svg`
  - `assets/img/flag-tw.svg`
  - `assets/img/flag-cn.svg`
- `assets/js/main.js` swaps showcase images based on:
  - current language (`en` vs Chinese states)
  - active scroll step in each project section
- The dashboard section uses `data-visual` values on each step:
  - `dashboard-main`
  - `dashboard-portfolio`
  - `dashboard-correlation`
- The tutorial section uses two visual keys:
  - `tutorial-overview`
  - `tutorial-week1`
- The dashboard image changes less often than the copy on purpose.
- The tutorial begins on a course-overview screenshot, then switches to the Week 1 interactive chart.

## Scrollytelling behavior

- The project showcases are the main visual centerpiece of the page.
- The words should advance in meaningful steps while the visual changes less frequently than the text.
- For the dashboard showcase in particular, the intended behavior is:
  - multiple text steps
  - three screenshots so the image changes less often than the copy
  - one default dashboard view
  - one positions / portfolio view
  - one correlation view
- If you modify this section, preserve the feeling that the copy is driving the story while the image acts as a stable anchor.

## Showcase content rules

### Portfolio Dashboard

- This is a live project.
- It should be presented as production-like and useful today.
- Important concepts to emphasize:
  - live market data
  - portfolio analytics
  - risk metrics
  - options-aware analysis
  - correlation and stress testing
  - privacy mode

### Investment Tutorial

- This should be clearly labeled as an early draft / first draft.
- Do not oversell it as finished.
- Important concepts to emphasize:
  - 52-week structure
  - interactive learning
  - interactive charts
  - multilingual course delivery
  - YouTube-ready teaching format

### Pipeline cards

- These are intentionally greyed out / visually muted.
- They are placeholders for future work, not launched products.
- Current concepts in the pipeline:
  - Trade History & P&L
  - Pundit Knowledge Base
  - YouTube channel

## Localization rules

- English is the default source language for structure, but not every translation should be literal.
- Hong Kong Chinese should read like formal Hong Kong financial/news prose.
  - Aim for publication-style Traditional Chinese.
  - Avoid colloquial Cantonese phrasing unless the user explicitly asks for it.
  - A good target tone is closer to Ming Pao / Hong Kong financial media than spoken Cantonese.
- Taiwan Chinese should use Taiwan-preferred wording.
- Mainland Chinese should use Simplified Chinese and mainland-preferred terminology.
- Keep the four language versions aligned in meaning, but not necessarily word-for-word.

## Language-specific visual rules

- Chinese-language page states should use Chinese screenshots where available.
- English page state should use English screenshots.
- For the dashboard showcase:
  - there is one Chinese dashboard overview screenshot that is shared across `hk`, `tw`, and `cn`
  - there is one Chinese positions / portfolio screenshot that is currently shared across `hk`, `tw`, and `cn`
  - there is one Chinese correlation screenshot for later steps
  - English states use English screenshots where available
- For the tutorial showcase:
  - the first screenshot should be the course overview page
  - the later screenshot should be Week 1 with an interactive chart visible
  - overview screenshots exist for `en`, `hk`, `tw`, and `cn`
  - Week 1 screenshots exist for `en` and `hk`; `tw` and `cn` currently fall back to the shared Chinese Week 1 chart asset to avoid broken Mermaid renders upstream

## Asset conventions

Place images under `assets/img/`.

Current naming style follows this pattern:

- `avatar.jpg`
- `dashboard-screenshot.png`
- `dashboard-screenshot-cn.png`
- `dashboard-portfolio.png`
- `dashboard-portfolio-cn.png`
- `dashboard-correlation.png`
- `dashboard-correlation-cn.png`
- `tutorial-overview-en.png`
- `tutorial-overview-hk.png`
- `tutorial-overview-tw.png`
- `tutorial-overview-cn.png`
- `tutorial-screenshot.png`
- `tutorial-week1-hk.png`
- `tutorial-week1-tw.png`
- `tutorial-week1-cn.png`

If you add more screenshots, keep the names explicit and language-aware.

## Contact section requirements

The contact area should continue surfacing the main ecosystem links:

- `hevangel.com`
- GitHub org
- Substack
- Patreon
- email

Social links may also be included when requested, for example:

- Threads
- Facebook

Keep this area compact and professional rather than turning it into a large social wall.

## Content positioning rules

- The site's core message is:
  - built for personal use first
  - shared publicly because the research/compute cost is already spent
  - open-source by default
  - donations and memberships are welcome, but the repos remain open
- Substack is positioned as free deep-research content.
- Patreon is positioned as hand-written, deeper analysis plus member support/access perks.

## Deployment context

- GitHub Pages serves the repo directly.
- `hevangel.com` also serves this site via nginx.
- The plain static site is deployed to `/var/www/html` on the server.
- The site is plain static files, so deployment is a file copy rather than a build artifact upload.

## SSL context

- `hevangel.com` previously used an expired wildcard certificate.
- It was replaced with a SAN certificate managed by Certbot through nginx HTTP-01.
- The cert lives under `/etc/letsencrypt/live/hevangel.com/`.
- If a new hostname is added later, the certificate may need to be re-issued or expanded.

## Editing guidance for future agents

- Keep changes minimal and focused.
- Preserve the current no-build static architecture unless the user explicitly approves a migration.
- When updating copy, check all four language blocks in `assets/js/i18n.js`.
- When updating project visuals, update both content and screenshots together.
- When changing screenshot behavior, verify that the sticky visual still works on mobile and desktop.
- If adding new sections, make sure the side-nav anchor list stays in sync.
- If changing controls in the header, verify they still fit on mobile widths.

## Validation expectations

After substantive edits, validate at least:

- the HTML still renders correctly
- language switching still works
- theme switching still works
- sticky scrollytelling still behaves sensibly
- mobile layout does not collapse
- screenshots match the active language where intended

## Deployment runbook

Typical publish flow used in this repo:

```pwsh
git -C b:\chanmainvest\chanmainvest.github.io status --short
git -C b:\chanmainvest\chanmainvest.github.io add -A
git -C b:\chanmainvest\chanmainvest.github.io commit -m "<message>"
git -C b:\chanmainvest\chanmainvest.github.io push origin main
```

Deploy to the custom-domain server:

```pwsh
scp -r b:\chanmainvest\chanmainvest.github.io\index.html b:\chanmainvest\chanmainvest.github.io\assets hevangel.com:/tmp/chanma_site/
ssh hevangel.com 'sudo -n rm -f /var/www/html/index.html; sudo -n rm -rf /var/www/html/assets; sudo -n cp -a /tmp/chanma_site/index.html /tmp/chanma_site/assets /var/www/html/; sudo -n chown -R www-data:www-data /var/www/html/index.html /var/www/html/assets; sudo -n chmod -R a+rX /var/www/html/index.html /var/www/html/assets; rm -rf /tmp/chanma_site'
```

Sanity-check the deployed site:

```pwsh
ssh hevangel.com 'curl -skL --resolve hevangel.com:443:127.0.0.1 https://hevangel.com/ | head -5'
Invoke-WebRequest -Uri 'https://hevangel.com/' -UseBasicParsing | Select-Object StatusCode, Headers
```

## Screenshot runbook

Current screenshots were captured from the live project pages using browser tooling.

Expected asset set:

- `assets/img/dashboard-screenshot.png`
- `assets/img/dashboard-screenshot-cn.png`
- `assets/img/dashboard-portfolio.png`
- `assets/img/dashboard-portfolio-cn.png`
- `assets/img/dashboard-correlation.png`
- `assets/img/dashboard-correlation-cn.png`
- `assets/img/tutorial-overview-en.png`
- `assets/img/tutorial-overview-hk.png`
- `assets/img/tutorial-overview-tw.png`
- `assets/img/tutorial-overview-cn.png`
- `assets/img/tutorial-screenshot.png`
- `assets/img/tutorial-week1-hk.png`
- `assets/img/tutorial-week1-tw.png`
- `assets/img/tutorial-week1-cn.png`

Screenshot intent:

- Dashboard main view:
  - English for `en`
  - Chinese for `hk`, `tw`, `cn`
- Dashboard positions / portfolio view:
  - shared cropped capture currently used for all languages
- Dashboard correlation view:
  - English for `en`
  - Chinese for `hk`, `tw`, `cn`
- Tutorial overview view:
  - one screenshot each for `en`, `hk`, `tw`, `cn`
- Tutorial Week 1 view:
  - interactive chart visible in frame
  - English for `en`
  - Hong Kong-specific chart screenshot for `hk`
  - shared Chinese Week 1 chart asset for `tw` and `cn`

When recapturing tutorial images, target the Week 1 interactive chart area rather than the top hero or plain text sections.

## Repository summary for quick orientation

- `index.html` contains the page structure.
- `assets/css/styles.css` contains all layout, theme, and component styling.
- `assets/js/i18n.js` contains the translation dictionary.
- `assets/js/main.js` contains theme, language, nav, and scroll interactions.
- `assets/img/` contains all visual assets.
