import { SmallPokemon } from "../../interfaces";

import "./Card.css";

interface Props {
  pokemon: SmallPokemon;
}

const Card = ({ pokemon: { name, img } }: Props) => {
  return (
    <div className="app__card slide-bottom">
      <img src={img} alt={name} className="card__image" />

      <div className="p__opensans">{name.toUpperCase()}</div>
    </div>
  );
};

export default Card;
