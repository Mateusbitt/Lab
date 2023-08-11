export function showMovie(movies) {
  let output = ""

  for (let i = 0; i < 5; i++) {
    let title = movies.results[i]

    output += `<div id="filmCard">
                <img id="movieImg" src="https://image.tmdb.org/t/p/w500/${title.poster_path}" alt="">
                <div id="voteAverage"><p>${title.vote_average}</p></div>
                <p>${title.original_title}</p>
                <a href="pages/detailPage/detailPage.html?movieId=${title.id}">Detalhes</a>
               </div>`
  }
  document.getElementById("movieContainer").innerHTML = output
}

export function showTopRated(movies) {
  let output = ""

  for (let i = 0; i < 5; i++) {
    let title = movies.results[i]

    output += `<div id="topRatedCard">
                <img id="topRatedImg" src="https://image.tmdb.org/t/p/w500/${title.poster_path}" alt="">
                <div id="voteAverage"><p>${title.vote_average}</p></div>
                <p>${title.original_title}</p>
                <a href="pages/detailPage/detailPage?movieId=${title.id}">Detalhes</a>
               </div>`
  }
  document.getElementById("topRatedContainer").innerHTML = output
}
