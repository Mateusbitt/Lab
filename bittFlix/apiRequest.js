import { showMovie, showTopRated } from "./src/script.js"

async function getPopularMovie() {
  try {
    const response = await fetch("http://localhost:4567/popular")
    const data = await response.json()
    console.log(data)
    showMovie(data)
  } catch (error) {
    console.log(error)
  }
}

getPopularMovie()

async function getTopRated() {
  try {
    const response = await fetch("http://localhost:4567/movie/top_rated")
    const popular = await response.json()
    console.log(popular)
    showTopRated(popular)
  } catch (error) {
    console.log(error)
  }
}

getTopRated()
