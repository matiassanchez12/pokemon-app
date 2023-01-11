import express from "express";
import * as pokemonServices from "../services/pokemonServices";

const router = express.Router();

router.get("/", async (_req, res) => {
  const pokemons = await pokemonServices.getPokemons();

  res.status(200).send(pokemons);
});

export default router;
