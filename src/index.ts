import express from "express";

import pokemonRouter from "./routes/pokemons";

const app = express();

app.use((_req, res, next) => {
  express.json();
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const PORT = 3000;

app.use("/api/pokemons", pokemonRouter);

app.listen(PORT);
