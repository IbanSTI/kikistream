/* Partie Navbar */
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

/* Set the width of the side navigation to 250px */
function openNav() {
    sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    sidenav.classList.remove("active");
}

function remplis(){
    if(inputPrenom.value && inputEmail.value && inputTéléphone.value && inputMessage.value){
        alert("Votre message à était envoyer")
    }else{
        alert("Veuiler remplir tout les champs")
    }
    
}