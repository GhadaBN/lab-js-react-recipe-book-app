import React from "react";
import "./DrinkCard.css";
import { Link } from "react-router-dom";

function DrinkCard({ id, name, image }) {
  return (
    <Link to={`/CocktailDetailsPage/${id}`}>
      <div className="drink-card">
        <div className="top-container">
          <h3>{name}</h3>
        </div>
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className="bottom-container">
          <h3>Go to recipe</h3>
        </div>
      </div>
    </Link>
  );
}

export default DrinkCard;
