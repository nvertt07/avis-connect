// =========================
// Apparition des éléments
// =========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card, .price-card, .faq-item").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// =========================
// Header
// =========================

const header = document.querySelector(".header");

if (header) {
    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            header.style.background = "rgba(7,17,31,.96)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
        } else {
            header.style.background = "rgba(7,17,31,.85)";
            header.style.boxShadow = "none";
        }

    });
}

// =========================
// Animation des cartes
// =========================

document.querySelectorAll(".card,.price-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {

        if (card.classList.contains("premium")) {
            card.style.transform = "scale(1.05)";
        } else {
            card.style.transform = "";
        }

    });

});

// =========================
// Commande
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const offre20 = document.getElementById("offre20");
    const offre30 = document.getElementById("offre30");

    const btn20 = document.getElementById("btn20");
    const btn30 = document.getElementById("btn30");

    const prixChoisi = document.getElementById("prixChoisi");
    const offreChoisie = document.getElementById("offreChoisie");
    const payerBtn = document.getElementById("payerBtn");

    if (!btn20 || !btn30) return;

    offre20.classList.add("active");

    btn20.addEventListener("click", (e) => {
        e.preventDefault();

        offre20.classList.add("active");
        offre30.classList.remove("active");

        offreChoisie.textContent = "Carte configurée";
        prixChoisi.textContent = "20 €";
        payerBtn.textContent = "Payer 20 €";
    });

    btn30.addEventListener("click", (e) => {
        e.preventDefault();

        offre30.classList.add("active");
        offre20.classList.remove("active");

        offreChoisie.textContent = "Offre Premium";
        prixChoisi.textContent = "30 €";
        payerBtn.textContent = "Payer 30 €";
    });

const form = document.querySelector(".formulaire form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Le paiement Stripe sera connecté ici.");
});