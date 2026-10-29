# Renew & Revitalise Wellbeing website

Static site for Renew & Revitalise Wellbeing, hosted with GitHub Pages.

## Structure

- `index.html`, `about.html`, `benefits.html`, `faqs.html`, `terms.html`: the pages
- `assets/style.css`: all styling (colours and fonts are defined at the top)
- `assets/main.js`: mobile menu, plus the Fresha booking link (`BOOKING_URL`) used by every "Book" button
- `.nojekyll`: tells GitHub Pages to serve the files as-is

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publishing

In the GitHub repo go to **Settings → Pages**, set **Source** to "Deploy from a branch",
choose `main` and `/ (root)`, then save. The site is published at https://rrwb.uk/ (custom domain set by the `CNAME` file;
DNS is managed at Gandi). The old https://rrwb-uk.github.io/website/ address redirects there.

## SEO

- `sitemap.xml` and `robots.txt`: list the pages for search engines. Add any new page to `sitemap.xml`.
- Each page has a canonical link and share-preview tags (`og:*`) using `images/share.png`.
- `index.html` has the business details (address, phone, hours) as JSON-LD for Google.
