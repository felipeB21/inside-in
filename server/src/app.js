const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/trends", async (req, res) => {
  try {
    const fetch = require("node-fetch");

    const url =
      "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&page_size=5";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjhmNTA5MTFmNDYwZmM5MGIzOWNkNmRmZTM3M2RiZiIsInN1YiI6IjY1YjMwOGQ0ZGI5NTJkMDE4M2RiMjYyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tQo_UOwDZ0ZZaeLBNjCRlLr7xminNrelv9x76j5lpoQ",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const firstFiveMovies = data.results.slice(0, 4);
    res.json(firstFiveMovies);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3030);
