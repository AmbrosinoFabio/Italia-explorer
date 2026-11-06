# 🇮🇹 Italia Explorer

A website for exploring Italian cities, built with plain HTML, CSS and JavaScript, with an interactive map and locally saved preferences.

**Live demo:** https://ambrosinofabio.github.io/Italia-explorer/PJ1.html

## Features

- **Destinations** — cards for Italian cities with a photo, tags and a description
- **Interactive map** — a map (Leaflet + OpenStreetMap/CARTO) with a marker for each city and an info panel on click
- **Detail page** for each city (`citta.html`), covering history and food
- **Favorites and visited cities** — saved in `localStorage`, they persist across sessions
- **Dark mode**
- **Contact page** with a form and a privacy/cookie notice

## Project structure

```
PJ1.html          # Home: destinations, map, visited cities
citta.html        # Detail page for a single city
contatti.html     # Contact page + privacy/cookie policy
css/
  style.css       # Stylesheet
js/
  data.js         # City data shared across pages
  common.js       # Shared logic (dark mode, footer, etc.)
  script.js       # Home page logic (cards, map, favorites, visited)
  citta.js        # City detail page logic
  contatti.js     # Contact page logic
img/
  *.jpeg          # Photos of the main destinations
```

## Running locally

The project needs no build step or package installation: all you need is a browser with an Internet connection (for the map, fonts and some photos, see Dependencies).

```bash
git clone https://github.com/AmbrosinoFabio/Italia-explorer.git
cd Italia-explorer
python3 -m http.server 8000
```
Then open `http://localhost:8000/PJ1.html`.

> Note: use a local server instead of opening the files directly. The map and some features rely on resources loaded over the network and work better served over `http://` than from `file://`.

## Dependencies

No packages to install (no npm, no build step). At runtime the project loads:

- [Leaflet 1.9.4](https://leafletjs.com/) (CSS + JS) via CDN [unpkg.com] — interactive map
- Map tiles from [CARTO](https://carto.com/) / OpenStreetMap
- [Google Fonts](https://fonts.google.com/) — *Playfair Display* and *Poppins* families
- [LoremFlickr](https://loremflickr.com/) — photos for cities without a bundled local image (Genoa, Bari, Lecce, Cagliari, Perugia, Trieste, Bergamo, Parma, Trento, Assisi): these are random images generated on the fly, **they change on every load and are not guaranteed if the service is unreachable**. The other cities use photos included in the repository.

## Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white)

## License

Released under the [MIT](LICENSE) license. The destination photos remain subject to the rights of their respective authors and sources.
