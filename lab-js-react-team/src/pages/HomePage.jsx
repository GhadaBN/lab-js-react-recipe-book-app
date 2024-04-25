import Header from "../components/Header/Header";
import DrinksList from "../components/DrinksList/DrinksList";
import { useState } from "react";
import "../App.css";
import DrinkCard from "../components/DrinkCard/DrinkCard";
import cocktailsData from "../assets/Recipes.json";

function HomePage() {
  const [cocktail, setCocktail] = useState(cocktailsData);
  return (
    <div>
      <Header />
      <DrinksList />
    </div>
  );
}

export default HomePage;
