import React from "react";
import "./DrinksList.css";
import cocktailsData from "../../assets/Recipes.json";

import DrinkCard from "../DrinkCard/DrinkCard";
import { useState } from "react";

function DrinksList() {
  const [cocktail, setCocktail] = useState(cocktailsData);
  return (
    <div className="drinks-list">
      {cocktail.map((cocktail) => (
        <DrinkCard key={cocktail.id} {...cocktail} />
      ))}
    </div>
  );
}

export default DrinksList;
