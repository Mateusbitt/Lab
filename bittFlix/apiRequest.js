async function getcontent() {
  try {
    const response = await fetch("http://localhost:4567/")
    const data = await response.json()
    console.log(data)
    showDate(data)
  } catch (error) {
    console.log(error)
  }
}

getcontent()

function showDate(movies) {
  let output = ""

  for (let i = 0; i < 5; i++) {
    let title = movies.results[i]

    output += `<div id="filmCard">
                <img id="movieImg" src="https://image.tmdb.org/t/p/w500/${title.poster_path}" alt="">
                <div id="voteAverage"><p>${title.vote_average}</p></div>
                <p>${title.original_title}</p>
                <button>Detalhes</button>
               </div>`
  }
  document.getElementById("midContainer").innerHTML = output
}
