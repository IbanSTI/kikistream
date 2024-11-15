/* Création des variables pour la navbar hamburger */
let sidenav = document.getElementById("Hamburger");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Fonction pour afficher la navbar */
function openNav() {
    sidenav.classList.add("active");
}

/* Fonction pour cacher la navbar */
function closeNav() {
    sidenav.classList.remove("active");
}