/* Création des variables pour la navbar hamburger ainsi que pour le formulaire */
let sidenav = document.getElementById("Hamburger");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let inputPrenom = document.getElementById("prenom");
let inputTéléphone = document.getElementById("téléphone");
let inputMessage = document.getElementById("message");
let inputEmail = document.getElementById("email");
let prenom = inputPrenom.value
let téléphone = inputTéléphone.value
let email = inputEmail.value
let message = inputMessage.value

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

/* Fonction pour afficher l'alerte selon deux cas précis */
function remplis(){
    if(inputPrenom.value && inputEmail.value && inputTéléphone.value && inputMessage.value){
        alert("Votre message a été envoyé")
    }else{
        alert("Veuilez remplir tous les champs")
    }
    
}