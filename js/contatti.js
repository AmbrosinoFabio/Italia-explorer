/*=========================================================
    ITALIA EXPLORER
    contatti.js - gestione del modulo di contatto
=========================================================*/

const contactForm=document.getElementById("contactForm");

const formFeedback=document.getElementById("formFeedback");

contactForm.addEventListener("submit",(event)=>{

    event.preventDefault();

    const nome=document.getElementById("nome").value.trim();

    formFeedback.textContent=

    "Grazie "+nome+"! Il modulo funziona correttamente. (Progetto dimostrativo: il messaggio non viene realmente inviato, non essendoci un server collegato).";

    formFeedback.classList.remove("hidden");

    contactForm.reset();

});
