# michaelpalhidai.com

Personal landing page for Michael Palhidai — founder of the Verdant Protocol and SOLACE transitional housing, and creator of free automated options trading strategies and indicators.

Plain static HTML/CSS/JS served by GitHub Pages (`.nojekyll`, no build step). Custom domain set by `CNAME`.

## Structure
- `index.html` — landing page (hero, ventures, about, contact)
- `donate.html` — donation options (SOLACE and personal)
- `assets/css/main.css`, `assets/js/main.js`, `assets/img/`

## Enabling donations
Open `assets/js/main.js` and paste hosted payment URLs (Stripe Payment Link, PayPal, GoFundMe…) into `DONATION_LINKS` at the top. Empty values render as disabled "coming soon" buttons. No card data is collected on this site.

## Local preview
```
python3 -m http.server 8000
```
