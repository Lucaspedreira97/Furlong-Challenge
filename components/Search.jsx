import "../styles/search.css";
import React, { useState } from "react";
// import {AiOutlineSearch} from "react-icons/ai"

export default function Search({ onSearch }) {
  const [input, setInput] = useState();

  const handleInput = (e) => {
    //Toma los valores del evento constantemente y los actuliza
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // Ejecuta la funcion onSearch con lo que tiene el input adentro y luego resetea el estado.
    e.preventDefault();
    onSearch(input);
    setInput("");
  };

  return (
    <div className="searchContainer">
      <input
        class="input"
        name="text"
        placeholder="Search..."
        type="search"
        onChange={(e) => handleInput(e)}
      ></input>
      <button className="input" type="submit" onClick={handleSubmit}>
        {/* <AiOutlineSearch /> */}
        Go
      </button>
    </div>
  );
}
