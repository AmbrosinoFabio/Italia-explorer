/*=========================================================
    ITALIA EXPLORER
    citta.js - logica della pagina di dettaglio citta
=========================================================*/

const params=new URLSearchParams(window.location.search);

const nomeCitta=params.get("nome");

const city=citiesData[nomeCitta];

const cityHero=document.getElementById("cityHero");

const cityTitle=document.getElementById("cityTitle");

const cityHistory=document.getElementById("cityHistory");

const cityFood=document.getElementById("cityFood");

const cityMapDiv=document.getElementById("cityMap");

if(!city){

    cityTitle.textContent="Città non trovata";

    cityHistory.textContent="La città che stai cercando non è nel nostro catalogo. Torna alla home e scegli una destinazione dalla lista.";

    cityFood.textContent="";

    cityMapDiv.style.display="none";

}else{

    document.title=nomeCitta+" | Italia Explorer";

    cityTitle.textContent=nomeCitta;

    cityHistory.textContent=city.historyDetail || city.history;

    cityFood.textContent=city.foodDetail || city.food;

    cityHero.style.backgroundImage="url('"+city.img+"')";

    const cityMap=L.map("cityMap").setView([city.lat,city.lng],13);

    L.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{

        attribution:"&copy; OpenStreetMap contributors &copy; CARTO",

        maxZoom:20

    }).addTo(cityMap);

    L.marker([city.lat,city.lng])
        .addTo(cityMap)
        .bindPopup("<b>"+nomeCitta+"</b>")
        .openPopup();

}
