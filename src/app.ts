import express from "express";

import pokemonRouter from "./routes/pokemons";

const app = express();

app.use((_req, res, next) => {
  express.json();
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api/pokemons", pokemonRouter);

export default app;
