import Card from "../Card/Card";
import Loader from "../Loader/Loader";

import { SmallPokemon } from "../../interfaces";
import "./PokemonList.css";

interface Props {
  pokemons: SmallPokemon[];
  isLoading: boolean;
  notFoundPokemon: boolean;
}

const PokemonList = ({ pokemons, isLoading, notFoundPokemon }: Props) => {
  return (
    <div
      className="app__pokemonlist"
      style={{ justifyContent: notFoundPokemon || pokemons.length === 0 ? "center" : "start" }}
    >
      <Loader isLoading={isLoading} />

      <div
        className="flex__center"
        style={{
          display: !notFoundPokemon && pokemons.length === 0 && !isLoading ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        <p className="p__opensans">Todo listo!</p>
        <p className="p__opensans">Utiliza el buscador para encontrar a tu pokemon</p>
      </div>

      <div className="flex__center" style={{ display: notFoundPokemon ? "flex" : "none" }}>
        <p className="p__opensans">No se encontraron pokemones :(</p>
      </div>

      {pokemons.length > 0 &&
        pokemons.map((pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon} />;
        })}
    </div>
  );
};

export default PokemonList;
