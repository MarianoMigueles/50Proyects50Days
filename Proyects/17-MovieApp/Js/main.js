const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

getMovies()

function getMovies() {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        showMovies(data.results)
        console.table(data.results)
    })
}

function showMovies(data) {
    const mainContainer = document.querySelector('main')
    mainContainer.innerHTML = ''

    data.forEach(movie => {
        mainContainer.innerHTML += `
            <div class="movie-container center-element ">
                <img src="${IMG_PATH+movie.poster_path}" alt="${movie.title} image">
                <div class="movie-info center-element">
                    <h3>${movie.title}</h3>
                    <p>${movie.vote_average}</p>
                </div>
                <div id="description-container" class="movie-info description">
                    <h3>Overview</h3>
                    <p>${movie.overview}</p>
                </div>
            </div>
        `;

    })
}

const searchInput = document.querySelector('#search-input')
const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()

    if (searchInput.value.trim() !== '') 
    {
        fetch(SEARCH_API+searchInput.value)
        .then(res => res.json())
        .then(data => {
            showMovies(data.results)
        })
    } else {
        getMovies()
    }
    
})