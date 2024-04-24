import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/" className="logo">
        POUR DECISIONS
      </Link>
      <div className="nav-links-container">
        <Link to="/CocktailDetails/:cocktailId" className="nav-link">
          RECIPES
        </Link>
        <Link to="/about" className="nav-link">
          ABOUT
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
