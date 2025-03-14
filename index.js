import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;
console.log("OMDb API Key:", process.env.OMDB_API_KEY);

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "movies_db",
  password: "Khushi@123",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM movies ORDER BY rating DESC, watched_date DESC");
    res.render("index.ejs", { movies: result.rows });
  } catch (err) {
    console.log(err);
  }
});

app.post("/add", async (req, res) => {
  const { title, rating, watched_date, notes } = req.body;
  try {
    const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${process.env.OMDB_API_KEY}`;
    console.log("Fetching Movie from API:", apiUrl); // Debugging line

    const response = await axios.get(apiUrl);
    const poster_url = response.data.Poster || "default_poster.jpg";

    await db.query("INSERT INTO movies (title, rating, watched_date, notes, poster_url) VALUES ($1, $2, $3, $4, $5)",
      [title, rating, watched_date, notes, poster_url]);

    res.redirect("/");
  } catch (err) {
    console.log("Axios Error:", err.response?.data || err.message);
  }
});


app.post("/edit", async (req, res) => {
  const { title, rating, watched_date, notes, id } = req.body;
  try {
    await db.query("UPDATE movies SET title=$1, rating=$2, watched_date=$3, notes=$4 WHERE id=$5",
      [title, rating, watched_date, notes, id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const { id } = req.body;
  try {
    await db.query("DELETE FROM movies WHERE id=$1", [id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
