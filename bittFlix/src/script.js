export function showMovie(movies) {
  let output = ""

  for (let i = 0; i < 5; i++) {
    let title = movies.results[i]

    output += `<div id="filmCard">
                <img id="movieImg" src="https://image.tmdb.org/t/p/w500/${title.poster_path}" alt="">
                <div id="voteAverage"><p>${title.vote_average}</p></div>
                <p>${title.original_title}</p>
                <a href="pages/detailPage/detailPage.html">Detalhes</a>
               </div>`
  }
  document.getElementById("midContainer").innerHTML = output
}

export function showTv(movies) {
  let output = ""

  for (let i = 0; i < 5; i++) {
    let title = movies.results[i]

    output += `<div id="filmCard">
                <img id="movieImg" src="https://image.tmdb.org/t/p/w500/${title.poster_path}" alt="">
                <div id="voteAverage"><p>${title.vote_average}</p></div>
                <p>${title.original_title}</p>
                <a href="pages/detailPage/detailPage.html">Detalhes</a>
               </div>`
  }
  document.getElementById("midContainer2").innerHTML = output
}