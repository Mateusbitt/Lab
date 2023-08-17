const axios = require("axios")
const cors = require("cors")
const express = require("express")
const app = express()

app.use(cors())

app.get("/popular", async (req, res) => {
  try {
    const { data } = await axios(
      "https://api.themoviedb.org/3/movie/popular?region=BR&language=pt-BR&api_key=fc7d295c26d9108d9d70c770ee1064b7"
    )
    return res.json(data)
  } catch (error) {
    console.log(error)
  }
})

app.get("/movie/top_rated", async (req, res) => {
  try {
    const { data } = await axios(
      "https://api.themoviedb.org/3/movie/top_rated?region=BR&language=pt-BR&api_key=fc7d295c26d9108d9d70c770ee1064b7"
    )
    return res.json(data)
  } catch (error) {
    console.log(error)
  }
})

app.get("/movie/:movieId", async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}?region=BR&language=pt-BR&api_key=fc7d295c26d9108d9d70c770ee1064b7`
    );
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
})

app.listen("4567")
