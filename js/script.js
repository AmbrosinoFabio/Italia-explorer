/*=========================================================
    ITALIA EXPLORER
    script.js  - logica specifica della pagina Home
    (dark mode, footer, privacy modal ora in common.js)
    (dati citta ora in data.js)
=========================================================*/

/*==========================
ELEMENTI HTML
==========================*/

const body = document.body;

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");

const randomButton = document.getElementById("randomCity");

const favoriteButtons = document.querySelectorAll(".favorite");

const cityButtons = document.querySelectorAll(".city-btn");

const infoBox = document.getElementById("infoBox");

const visitButtons = document.querySelectorAll(".visit-btn");

const visitCounter = document.getElementById("visitCounter");

const suggestionsBox = document.getElementById("suggestionsBox");

const slider = document.getElementById("slider");


/*==========================
RICERCA CITTA'
==========================*/

searchInput.addEventListener("keyup",()=>{

    const value = searchInput.value.toLowerCase();

    cards.forEach(card=>{

        const city =
        card.querySelector("h3")
        .textContent
        .toLowerCase();

        if(city.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});


/*==========================
PREFERITI
==========================*/

favoriteButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.classList.toggle("active");

        if(button.classList.contains("active")){

            button.innerHTML="❤️";

        }else{

            button.innerHTML="🤍";

        }

        salvaPreferiti();

    });

});


function salvaPreferiti(){

    const preferiti=[];

    favoriteButtons.forEach(button=>{

        preferiti.push(

            button.classList.contains("active")

        );

    });

    localStorage.setItem(

        "preferiti",

        JSON.stringify(preferiti)

    );

}


function caricaPreferiti(){

    const preferiti=

    JSON.parse(

    localStorage.getItem("preferiti")

    );

    if(!preferiti) return;

    favoriteButtons.forEach((button,index)=>{

        if(preferiti[index]){

            button.classList.add("active");

            button.innerHTML="❤️";

        }

    });

}

caricaPreferiti();


/*==========================
MAPPA INTERATTIVA (LEAFLET)
==========================*/

const cities = Object.keys(citiesData);

const italyMap = L.map("leafletMap").setView([42.5,12.5],6);

L.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{

    attribution:"&copy; OpenStreetMap contributors &copy; CARTO",

    maxZoom:20

}).addTo(italyMap);

let activeMarker=null;

function vaiSullaMappa(cityName){

    const city=citiesData[cityName];

    if(!city) return;

    italyMap.flyTo([city.lat,city.lng],13,{

        duration:1.5

    });

    if(activeMarker){

        italyMap.removeLayer(activeMarker);

    }

    activeMarker=L.marker([city.lat,city.lng])
        .addTo(italyMap)
        .bindPopup("<b>"+cityName+"</b>")
        .openPopup();

    infoBox.innerHTML=

    "<h2>"+cityName+"</h2>"+

    "<h3>📜 Un po' di storia</h3>"+

    "<p>"+city.history+"</p>"+

    "<h3>🍽️ Cosa si mangia</h3>"+

    "<p>"+city.food+"</p>";

    cityButtons.forEach(btn=>{

        btn.classList.toggle("active", btn.dataset.city===cityName);

    });

}

cityButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        vaiSullaMappa(button.dataset.city);

    });

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.08)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});


/*==========================
CITTA' CASUALE
==========================*/

randomButton.addEventListener("click",()=>{

    const random=

    Math.floor(

        Math.random()*cities.length

    );

    const cityName=cities[random];

    vaiSullaMappa(cityName);

    document.getElementById("mappa")

    .scrollIntoView({behavior:"smooth"});

});


/*==========================
CITTA' VISITATE + CONSIGLI
==========================*/

const tagLabels={

    mare:"il mare",

    montagna:"la montagna",

    lago:"i laghi",

    arte:"l'arte e la storia"

};

let visitedCities = JSON.parse(localStorage.getItem("visitedCities")) || [];

function aggiornaVisitate(){

    visitCounter.textContent = visitedCities.length;

    visitButtons.forEach(btn=>{

        btn.classList.toggle(

            "active",

            visitedCities.includes(btn.dataset.city)

        );

    });

    mostraSuggerimenti();

    localStorage.setItem(

        "visitedCities",

        JSON.stringify(visitedCities)

    );

}

function mostraSuggerimenti(){

    if(visitedCities.length===0){

        suggestionsBox.innerHTML=

        "Seleziona le città che hai già visitato per ricevere consigli personalizzati.";

        return;

    }

    const conteggioTag={};

    visitedCities.forEach(nome=>{

        const dati=citiesData[nome];

        if(!dati) return;

        dati.tags.forEach(tag=>{

            conteggioTag[tag]=(conteggioTag[tag]||0)+1;

        });

    });

    const tagPreferito=

    Object.keys(conteggioTag)

    .sort((a,b)=>conteggioTag[b]-conteggioTag[a])[0];

    if(!tagPreferito){

        suggestionsBox.innerHTML=

        "Seleziona le città che hai già visitato per ricevere consigli personalizzati.";

        return;

    }

    const candidate=

    cities.filter(nome=>

        !visitedCities.includes(nome) &&

        citiesData[nome].tags.includes(tagPreferito)

    );

    if(candidate.length===0){

        suggestionsBox.innerHTML=

        "Hai già esplorato tutte le mete di questo tipo, complimenti! 🎉";

        return;

    }

    let html=

    "<p>Ti piace "+tagLabels[tagPreferito]+"? Prova anche:</p>"+

    "<div class='suggestion-list'>";

    candidate.slice(0,4).forEach(nome=>{

        html+=

        "<button class='suggestion-chip' data-city=\""+nome+"\">"+nome+"</button>";

    });

    html+="</div>";

    suggestionsBox.innerHTML=html;

    suggestionsBox.querySelectorAll(".suggestion-chip").forEach(chip=>{

        chip.addEventListener("click",()=>{

            vaiSullaMappa(chip.dataset.city);

            document.getElementById("mappa")

            .scrollIntoView({behavior:"smooth"});

        });

    });

}

visitButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const nome=button.dataset.city;

        if(visitedCities.includes(nome)){

            visitedCities=visitedCities.filter(c=>c!==nome);

        }else{

            visitedCities.push(nome);

        }

        aggiornaVisitate();

    });

});

aggiornaVisitate();


/*==========================
SLIDER IMMAGINI (con frecce, pallini, didascalie e swipe)
==========================*/

const sliderImages=[

    {src:"img/roma.jpeg", name:"Roma"},
    {src:"img/milano.jpeg", name:"Milano"},
    {src:"img/venezia.jpeg", name:"Venezia"},
    {src:"img/firenze.jpeg", name:"Firenze"},
    {src:"img/napoli.jpeg", name:"Napoli"},
    {src:"img/torino.jpeg", name:"Torino"},
    {src:"img/palermo.jpeg", name:"Palermo"},
    {src:"img/matera.jpeg", name:"Matera"},
    {src:"img/dolomiti.jpeg", name:"Dolomiti"},
    {src:"img/cinque-terre.jpeg", name:"Cinque Terre"},
    {src:"img/pisa.jpeg", name:"Pisa"},
    {src:"img/siena.jpeg", name:"Siena"}

];

const sliderCaption = document.getElementById("sliderCaption");

const sliderDotsContainer = document.getElementById("sliderDots");

const prevSlideBtn = document.getElementById("prevSlide");

const nextSlideBtn = document.getElementById("nextSlide");

const sliderFrame = document.querySelector(".slider-frame");

let currentImage = 0;

let sliderTimer = null;

sliderImages.forEach((item,index)=>{

    const dot=document.createElement("button");

    dot.className="slider-dot";

    dot.setAttribute("aria-label","Vai a "+item.name);

    dot.addEventListener("click",()=>{

        showSlide(index);

        resetAutoplay();

    });

    sliderDotsContainer.appendChild(dot);

});

const sliderDots = document.querySelectorAll(".slider-dot");

function showSlide(index){

    currentImage=(index+sliderImages.length)%sliderImages.length;

    slider.classList.add("fade");

    setTimeout(()=>{

        slider.src=sliderImages[currentImage].src;

        sliderCaption.textContent=sliderImages[currentImage].name;

        slider.classList.remove("fade");

    },300);

    sliderDots.forEach((dot,i)=>{

        dot.classList.toggle("active", i===currentImage);

    });

}

function nextSlide(){

    showSlide(currentImage+1);

}

function prevSlide(){

    showSlide(currentImage-1);

}

function autoplay(){

    sliderTimer=setInterval(nextSlide,4000);

}

function resetAutoplay(){

    clearInterval(sliderTimer);

    autoplay();

}

nextSlideBtn.addEventListener("click",()=>{

    nextSlide();

    resetAutoplay();

});

prevSlideBtn.addEventListener("click",()=>{

    prevSlide();

    resetAutoplay();

});

sliderFrame.addEventListener("mouseenter",()=>clearInterval(sliderTimer));

sliderFrame.addEventListener("mouseleave",autoplay);

let touchStartX=0;

sliderFrame.addEventListener("touchstart",(event)=>{

    touchStartX=event.changedTouches[0].screenX;

});

sliderFrame.addEventListener("touchend",(event)=>{

    const touchEndX=event.changedTouches[0].screenX;

    const diff=touchEndX-touchStartX;

    if(Math.abs(diff)>50){

        if(diff<0){

            nextSlide();

        }else{

            prevSlide();

        }

        resetAutoplay();

    }

});

showSlide(0);

autoplay();

sliderImages.forEach(item=>{

    const img=new Image();

    img.src=item.src;

});


/*==========================
ANIMAZIONI CARD
==========================*/

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.25});

cards.forEach(card=>{

    observer.observe(card);

});


/*==========================
NAVBAR SHADOW
==========================*/

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.boxShadow="0 15px 35px rgba(0,0,0,.25)";

    }else{

        nav.style.boxShadow="0 4px 15px rgba(0,0,0,.10)";

    }

});


/*==========================
EFFETTO HOVER CARD
==========================*/

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-15px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


/*==========================
SALUTO
==========================*/

window.addEventListener("load",()=>{

    console.log("Italia Explorer avviato.");

});


/*==========================
SCORCIATOIA TASTIERA
==========================*/

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        searchInput.value="";

        cards.forEach(card=>{

            card.style.display="block";

        });

    }

});


/*==========================
EFFETTO TITOLO HERO
==========================*/

const heroTitle=document.querySelector(".overlay h1");

let scale=1;

setInterval(()=>{

    scale=scale===1 ? 1.02 : 1;

    heroTitle.style.transform=`scale(${scale})`;

},1500);


/*==========================
FINE SCRIPT
==========================*/

console.log("JavaScript caricato correttamente.");
