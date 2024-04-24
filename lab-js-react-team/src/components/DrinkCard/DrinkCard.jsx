import React from "react";
import "./DrinkCard.css";

function DrinkCard({ cocktail }) {
  return (
    <div className="drink-card">
      <div className="top-container">
        <h3>{cocktail.name}</h3>
      </div>
      <div className="image-container">
        <img src={cocktail.image} alt={cocktail.name} />
      </div>
      <div className="bottom-container">
        <h3>Go to recipe</h3>
      </div>
    </div>
  );
}

export default DrinkCard;
