import React from "react";
import "./DrinksList.css";
import cocktailsData from "../../assets/Recipes.json";
import DrinkCard from "../DrinkCard/DrinkCard";

function DrinksList() {
  return (
    <div className="drinks-list">
      {cocktailsData.map((cocktail) => (
        <DrinkCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  );
}

export default DrinksList;
