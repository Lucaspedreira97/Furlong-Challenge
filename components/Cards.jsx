import React from "react";
import CityCard from "./CityCard";
import "../styles/cards.css"

export default function Cards({cities}) {
   
  return (
    <div className="cards" >
      {!cities
        ? ""
        : cities.map((e, i) => (
            <CityCard nombre = { e.nombre } imagen = { e.imagen } pais = { e.pais } id = { e.id } atracciones = { e.atracciones }/>
          ))}
    </div>
  );
}