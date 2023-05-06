import React from "react";
import HotelCard from "./HotelCard";
import "../styles/hotelCards.css";

export default function HotelCards({ hotels }) {
  console.log(hotels, "hotelcards");

  return (
    <div className="hotelCards">
      {!hotels
        ? ""
        : hotels.map((e, i) => (
            <HotelCard
              name={e.name}
              url={e.url}
            />
          ))}
    </div>
  );
}
