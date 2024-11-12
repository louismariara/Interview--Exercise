import React, { useState } from "react";
import PlantCard from "./PlantCard";  
import PlantList from "./PlantList";  

const PlantSearch = ({ plants }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          value={search}
          type="text"
          id="search"
          placeholder="Type a name to search..."
          onChange={handleSearch}
        />
      </div>

      {search === "" ? (
        <ul className="cards">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              image={plant.image}
              name={plant.name}
              price={plant.price}
            />
          ))}
        </ul>
      ) : (
        <PlantList search={search} />
      )}
    </>
  );
};

export default PlantSearch;
