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

  for (let title of movies.results) {
    output += `<div id="filmCard">
                <p id="titleMovie">${title.original_title}</p>
                <img id="movieImg" src="https://image.tmdb.org/t/p/w500/${title.backdrop_path}" alt="">
                <p id="movieDescription">${title.overview}</p>
               </div>`
  }
  document.getElementById("midContainer").innerHTML = output
}
