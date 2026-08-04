# 🇮🇹 Italia Explorer

Sito di esplorazione delle città italiane, realizzato in HTML, CSS e JavaScript puro, con mappa interattiva e preferenze salvate in locale.

**Demo live:** https://ambrosinofabio.github.io/Italia-explorer/PJ1.html

## Funzionalità

- **Destinazioni** — card delle città italiane con foto, tag e descrizione
- **Mappa interattiva** — mappa (Leaflet + OpenStreetMap/CARTO) con marker per ogni città, pannello informazioni al click
- **Pagina di dettaglio** per ogni città (`citta.html`), con storia e gastronomia
- **Preferiti e città visitate** — salvati in `localStorage`, persistono tra le sessioni
- **Modalità scura**
- **Pagina contatti** con modulo e informativa privacy/cookie

## Struttura del progetto

```
PJ1.html          # Home: destinazioni, mappa, città visitate
citta.html        # Pagina di dettaglio di una singola città
contatti.html     # Pagina contatti + privacy/cookie policy
data.js           # Dati delle città condivisi tra le pagine
common.js         # Logica condivisa (dark mode, footer, ecc.)
script.js         # Logica della home (card, mappa, preferiti, visitate)
citta.js          # Logica della pagina di dettaglio città
contatti.js       # Logica della pagina contatti
style.css         # Fogli di stile
*.jpeg            # Foto delle destinazioni principali
```

## Come avviarlo in locale

Il progetto non richiede build né installazione di pacchetti: basta un browser con connessione a Internet (per mappa, font e alcune foto — vedi Dipendenze).

```bash
git clone https://github.com/AmbrosinoFabio/Italia-explorer.git
cd Italia-explorer
python3 -m http.server 8000
```
Poi apri `http://localhost:8000/PJ1.html`.

> Nota: usa un server locale invece di aprire i file direttamente — la mappa e alcune funzionalità dipendono da risorse caricate via rete e funzionano meglio serviti su `http://` piuttosto che su `file://`.

## Dipendenze

Nessun pacchetto da installare (no npm, no build step). Il progetto carica in fase di esecuzione:

- [Leaflet 1.9.4](https://leafletjs.com/) (CSS + JS) via CDN [unpkg.com] — mappa interattiva
- Tile della mappa da [CARTO](https://carto.com/) / OpenStreetMap
- [Google Fonts](https://fonts.google.com/) — famiglie *Playfair Display*, *Poppins*
- [LoremFlickr](https://loremflickr.com/) — foto per le città senza immagine locale bundled (Genova, Bari, Lecce, Cagliari, Perugia, Trieste, Bergamo, Parma, Trento, Assisi): sono immagini casuali generate al volo, **cambiano ad ogni caricamento e non sono garantite se il servizio non è raggiungibile**. Le altre città usano foto incluse nel repository.

## Tecnologie

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white)

## Licenza

Distribuito sotto licenza [MIT](LICENSE). Le foto delle destinazioni restano soggette ai diritti dei rispettivi autori/fonti.
