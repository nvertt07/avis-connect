// =========================
// Commande Avis Connect
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const btn20 = document.getElementById("btn20");
    const btn30 = document.getElementById("btn30");

    const offre20 = document.getElementById("offre20");
    const offre30 = document.getElementById("offre30");

    const prixChoisi = document.getElementById("prixChoisi");
    const offreChoisie = document.getElementById("offreChoisie");
    const payerBtn = document.getElementById("payerBtn");

    let offre = 20;

    btn20.onclick = function () {
        offre = 20;

        offre20.classList.add("active");
        offre30.classList.remove("active");

        prixChoisi.textContent = "20 €";
        offreChoisie.textContent = "Carte configurée";
        payerBtn.textContent = "Payer 20 €";
    };

    btn30.onclick = function () {
        offre = 30;

        offre30.classList.add("active");
        offre20.classList.remove("active");

        prixChoisi.textContent = "30 €";
        offreChoisie.textContent = "Offre Premium";
        payerBtn.textContent = "Payer 30 €";
    };

    document.querySelector("form").onsubmit = function (e) {
        e.preventDefault();

        if (offre === 20) {
            window.location.assign("https://buy.stripe.com/28E28q1FoakD4MM3gu1VK00");
        } else {
            window.location.assign("https://buy.stripe.com/9B614mbfYfEXgvu04i1VK01");
        }
    };

});