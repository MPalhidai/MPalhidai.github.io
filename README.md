# michaelpalhidai.com

Personal landing page for Michael Palhidai — founder of the Verdant Protocol and SOLACE transitional housing, and creator of free automated options trading strategies and indicators.

Plain static HTML/CSS/JS served by GitHub Pages (`.nojekyll`, no build step). Custom domain set by `CNAME`.

## Structure
- `index.html` — landing page (hero, ventures, about, contact)
- `donate.html` — donation options (SOLACE and personal) — **currently hidden**, see below
- `assets/css/main.css`, `assets/js/main.js`, `assets/img/`

## Donations are hidden for now
The Donate nav button, the "Support SOLACE" / "Found it useful? Support my family" card buttons and the footer Donate link are commented out with `<!-- DONATIONS HIDDEN ... -->` in `index.html` and `donate.html`. `donate.html` is kept in the repo but has `noindex`, a meta refresh to `/` and a `location.replace("/")` script, so it just redirects home.

To re-enable: search for `DONATIONS HIDDEN` and uncomment those links/buttons in `index.html` and `donate.html`, and delete the robots meta, the meta refresh and the redirect `<script>` at the top of `donate.html`'s `<head>`.

## Enabling donations
Open `assets/js/main.js` and paste hosted payment URLs (Stripe Payment Link, PayPal, GoFundMe…) into `DONATION_LINKS` at the top. Empty values render as disabled "coming soon" buttons. No card data is collected on this site.

## Local preview
```
python3 -m http.server 8000
```
