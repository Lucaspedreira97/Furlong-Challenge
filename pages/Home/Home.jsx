import React, { useState } from "react";
import Search from "../../components/Search";
import Layout from "../../common/Layout";
import CarouselHome from "../../components/CarouselHome";
import Cards from "../../components/Cards";
import data from "../../json/index.json";
import "../../styles/home.css";

export default function Home() {
  const [cities, setCities] = useState(data.destinos);
  const [error, setError] = useState("");

  const onSearch = (query) => {
    const filteredCountries = data.destinos.filter((e) =>
      e.pais.toLowerCase().startsWith(query.toLowerCase())
    );
    if (filteredCountries.length === 0) {
      setError(`No se encontró el país "${query}"`);
      setCities([]);
    } else {
      setError("");
      setCities(filteredCountries);
    }
  };
 
  return (
    <Layout>
      <div className="homeContainer">
        <Search onSearch={onSearch} />
        <CarouselHome />
        {error ? (
          <div className="errorContainer">{error}</div>
        ) : (
          <Cards cities={cities} />
        )}
      </div>
    </Layout>
  );
}
