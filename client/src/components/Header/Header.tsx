import { useEffect, useState } from "react";
import Searcher from "../Searcher/Searcher";
import Gif from "../../assets/pikachu.gif";

import "./Header.css";
import PokemonList from "../PokemonList/PokemonList";
import axios from "axios";
import { SmallPokemon } from "../../interfaces";

const Header = () => {
  const [pokemons, setPokemons] = useState<SmallPokemon[]>([]);
  const [filterPokemons, setFilterPokemons] = useState<SmallPokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundPokemon, setNotFoundPokemon] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);

      const { data = [] } = await axios.get<SmallPokemon[]>("http://localhost:3000/api/pokemons");

      setTimeout(() => {
        setPokemons(data);
        setIsLoading(false);
      }, 2000);
    };

    fetchPokemons();
  }, []);

  const onSearch = (text: string) => {
    if (!text.trim().length) {
      setFilterPokemons([]);
      return;
    }

    const filteredPokemons = pokemons.filter((poke) => poke.name.includes(text.toLocaleLowerCase().trim()));

    if (filteredPokemons.length === 0) {
      setNotFoundPokemon(true);

      return;
    }

    setFilterPokemons(filteredPokemons);
    setNotFoundPokemon(false);
  };

  return (
    <div className="section__padding">
      <div className="flex__start">
        <h1 className="headtext__opensans">Pokemon finder</h1>

        <img src={Gif} alt="gif-pikachu" className="image__gif" />
      </div>
      <h3 className="h3__opensans">El que quiere Pokemons, que los busque.</h3>

      <Searcher onSearch={onSearch} />

      <PokemonList pokemons={filterPokemons} isLoading={isLoading} notFoundPokemon={notFoundPokemon} />
    </div>
  );
};

export default Header;
