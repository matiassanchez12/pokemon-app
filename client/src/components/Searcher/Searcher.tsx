import { useState } from "react";

import "./Searcher.css";

interface Props {
  onSearch: (text: string) => void;
}

const Searcher = ({ onSearch }: Props) => {
  const [value, setValue] = useState("");

  const onClick = () => {
    onSearch(value);
  };

  return (
    <div className="app__searcher">
      <div className="flex__start" style={{ flexDirection: "column", alignItems: "start" }}>
        <input
          type="text"
          className="searcher__input"
          placeholder="Ingrese el nombre a buscar"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          onKeyUp={({ key }) => {
            if (key === "Enter") {
              onSearch(value);
            }
          }}
        />

        <p className="p__opensans text__help">Presionar [enter] para buscar</p>
      </div>

      <button type="button" onClick={onClick} className="custom__button flex__center">
        <svg className="icon__button" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.70247 10.7661C3.70247 6.85717 6.87126 3.68839 10.7802 3.68839C14.6891 3.68839 17.8578 6.85717 17.8578 10.7661C17.8578 14.675 14.6891 17.8438 10.7802 17.8438C6.87126 17.8438 3.70247 14.675 3.70247 10.7661ZM10.7802 1.98592C5.93101 1.98592 2 5.91693 2 10.7661C2 15.6152 5.93101 19.5462 10.7802 19.5462C13.0537 19.5462 15.1253 18.6821 16.6847 17.2645L20.5468 21.1266C20.8793 21.459 21.4182 21.459 21.7507 21.1266C22.0831 20.7942 22.0831 20.2552 21.7507 19.9228L17.8294 16.0015C18.9168 14.5397 19.5603 12.728 19.5603 10.7661C19.5603 5.91693 15.6293 1.98592 10.7802 1.98592Z"
              fill="#1C1C1C"
            ></path>{" "}
          </g>
        </svg>
        Buscar
      </button>
    </div>
  );
};

export default Searcher;
