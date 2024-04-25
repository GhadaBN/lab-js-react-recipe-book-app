import React from "react";
import "./DrinksList.css";
import cocktailsData from "../../assets/Recipes.json";

import DrinkCard from "../DrinkCard/DrinkCard";
import { useState } from "react";

function DrinksList() {
  const [cocktails, setCocktails] = useState(cocktailsData);
  return (
    <div className="drinks-list">
      {cocktails.map((cocktail) => (
        <DrinkCard key={cocktail.id} {...cocktail} />
      ))}
    </div>
  );
}

export default DrinksList;
