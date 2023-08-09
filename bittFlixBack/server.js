const axios = require("axios")
const cors = require("cors")
const express = require("express")
const app = express()

app.use(cors())

app.get("/popular", async (req, res) => {
  try {
    const { data } = await axios(
      "https://api.themoviedb.org/3/movie/popular?api_key=fc7d295c26d9108d9d70c770ee1064b7"
    )
    return res.json(data)
  } catch (error) {
    console.log(error)
  }
})

app.get("/tv/popular", async (req, res) => {
  try {
    const { data } = await axios(
      "https://api.themoviedb.org/3/tv/popular?api_key=fc7d295c26d9108d9d70c770ee1064b7"
    )
    return res.json(data)
  } catch (error) {
    console.log(error)
  }
})

app.listen("4567")
