import app from "../src/app";
import request from "supertest";
import { PokemonListResponse, SmallPokemon } from "../src/types";
import pokemonApi from "../src/utils";

describe("GET /api/pokemons", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/pokemons").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond with an array", async () => {
    const response = await request(app).get("/api/pokemons").send();
    expect(response.body).toBeInstanceOf(Array);
  });

  test("should respond with an array lenght", async () => {
    const response = await request(app).get("/api/pokemons").send();
    const pokemons: SmallPokemon[] = response.body;

    expect(pokemons.length).toBe(161);
  });

  test("should respond with an array of 161 pokemons", async () => {
    const {
      data: { results },
    } = await pokemonApi.get<PokemonListResponse>("pokemon?limit=161");
    const pokemonsFromPokeapi: SmallPokemon[] = results.map((pokemon, i) => {
      return {
        ...pokemon,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
      };
    });

    const response = await request(app).get("/api/pokemons").send();
    const pokemons: SmallPokemon[] = response.body;

    expect(pokemons).toStrictEqual(pokemonsFromPokeapi);
  });
});
