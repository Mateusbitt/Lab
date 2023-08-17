const urlParams = new URLSearchParams(window.location.search)
const movieId = urlParams.get("movieId")

async function fetchMovieDetails() {
  try {
    const response = await fetch(`http://localhost:4567/movie/${movieId}`)
    const movieDetails = await response.json()
    showMovieDetails(movieDetails)
    dynamicTitle(movieDetails)
    console.log(movieDetails)
  } catch (error) {
    console.log(error)
  }
}

function dynamicTitle(movie) {
  const takeDynamicTitle = movie.title
  const pageTitle = document.querySelector("title")
  pageTitle.textContent = takeDynamicTitle
}

function takeGenres(movie) {
  const genreNames = movie.genres.map(genre => genre.name)
  return genreNames.join(', ')
}

function showMovieDetails(movie) {
  const detailContainer = document.getElementById("detailContainer");
  detailContainer.innerHTML = `
    <div id="leftSide">    
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
    </div>
    <div id="rightSide">
      <h1>${movie.title}</h1>
      <h3>${movie.tagline}</h3>
      <p>${movie.overview}</p>
      <p>Lançamento: ${movie.release_date}</p>
      <p>Gênero: ${takeGenres(movie)}</p>
      <p id="note">Nota: ${movie.vote_average}</p>
    </div>
  `;
}

fetchMovieDetails()

var header = document.getElementById("headerContainer")
var navigationHeader = document.getElementById("navHeader")
var container = document.getElementById("fullContainer")
var showSidebar = false

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    toggleSidebar()
  }
})

function toggleSidebar() {
  showSidebar = !showSidebar
  if (showSidebar) {
    navigationHeader.style.marginLeft = "-10vw"
    container.style.filter = "blur(2px)"
  } else {
    navigationHeader.style.marginLeft = "-100vw"
    container.style.filter = ""
  }
}

function closeSidebar() {
  if (showSidebar) {
    toggleSidebar()
  }
}
