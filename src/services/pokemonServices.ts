import { PokemonListResponse, SmallPokemon } from "../types";
import pokemonApi from "../utils";

export const getPokemons = async (): Promise<SmallPokemon[] | []> => {
  const { data, status } = await pokemonApi.get<PokemonListResponse>("pokemon?limit=161");

  if (status !== 200) {
    return [];
  }

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
    };
  });

  return pokemons;
};
