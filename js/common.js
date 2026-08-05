/*=========================================================
    ITALIA EXPLORER
    common.js - logica condivisa tra tutte le pagine del sito
=========================================================*/

/*==========================
DARK MODE
==========================*/

const darkButton = document.getElementById("darkMode");

if(darkButton){

    darkButton.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        localStorage.setItem(
            "darkMode",
            document.body.classList.contains("dark")
        );

    });

}

if(localStorage.getItem("darkMode")==="true"){

    document.body.classList.add("dark");

}


/*==========================
SMOOTH SCROLL MENU (solo per link ancora nella stessa pagina)
==========================*/

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",(event)=>{

        const href=link.getAttribute("href");

        if(href && href.startsWith("#")){

            const target=document.querySelector(href);

            if(target){

                event.preventDefault();

                target.scrollIntoView({behavior:"smooth"});

            }

        }

    });

});


/*==========================
FOOTER: ANNO DINAMICO
==========================*/

const yearSpan=document.getElementById("currentYear");

if(yearSpan){

    yearSpan.textContent=new Date().getFullYear();

}


/*==========================
PRIVACY & COOKIE MODAL
==========================*/

const privacyModal=document.getElementById("privacyModal");

if(privacyModal){

    const openPrivacyBtn=document.getElementById("openPrivacy");

    const closePrivacyBtn=document.getElementById("closePrivacy");

    if(openPrivacyBtn){

        openPrivacyBtn.addEventListener("click",()=>{

            privacyModal.classList.add("open");

        });

    }

    if(closePrivacyBtn){

        closePrivacyBtn.addEventListener("click",()=>{

            privacyModal.classList.remove("open");

        });

    }

    privacyModal.addEventListener("click",(event)=>{

        if(event.target===privacyModal){

            privacyModal.classList.remove("open");

        }

    });

    document.addEventListener("keydown",(event)=>{

        if(event.key==="Escape"){

            privacyModal.classList.remove("open");

        }

    });

}
