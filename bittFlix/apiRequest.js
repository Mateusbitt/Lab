import { showMovie, showTv } from "./src/script.js"

async function getcontent() {
  try {
    const response = await fetch("http://localhost:4567/popular")
    const data = await response.json()
    console.log(data)
    showMovie(data)
  } catch (error) {
    console.log(error)
  }
}

async function getPopular() {
  try {
    const response = await fetch("http://localhost:4567/tv/popular")
    const popular = await response.json()
    console.log(popular)
    ///////////////
  } catch (error) {
    console.log(error)
  }
}

getPopular()
getcontent()
