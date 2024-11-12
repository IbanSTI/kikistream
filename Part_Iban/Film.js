/* Partie Navbar */
let sidenav = document.getElementById("Hamburger");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    sidenav.classList.add("active");
}

function closeNav() {
    sidenav.classList.remove("active");
}




/* Partie API ajout des films */

const apiKey = `0942abc50c560a6eda0b72995a90eb37`
const apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;
const moviesContainer = document.getElementById("movies");

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.results.forEach(media => {
            const movieCard = createMovieCard(media);
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createMovieCard(media) {
    const {title, name, poster_path, key} = media;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie_item")

    movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="film_img" onclick="window.open('https://www.youtube.com')"> 
        <p class="film_text">${title || name}</p>
    `; /* Quand on clique sur un film, cela renvoit sur youtube car nous n'avons pas accès au vrai lien. */
    return movieCard;
}

fetchMovies();