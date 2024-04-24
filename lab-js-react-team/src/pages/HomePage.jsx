import Header from "../components/Header/Header";
import DrinksList from "../components/DrinksList/DrinksList";
import { useState } from "react";
import "../App.css";

function HomePage() {
  return (
    <div>
      <Header />
      <DrinksList />
    </div>
  );
}

export default HomePage;
