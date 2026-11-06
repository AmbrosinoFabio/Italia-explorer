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

    "Thank you "+nome+"! The form works correctly. (Demo project: the message is not actually sent, as there is no connected server).";

    formFeedback.classList.remove("hidden");

    contactForm.reset();

});
