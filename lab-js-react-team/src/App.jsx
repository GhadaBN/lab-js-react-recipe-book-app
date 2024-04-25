import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CocktailDetailsPage from "./pages/CocktailDetailsPage";
import AddRecipe from "./pages/AddRecipePage";
import cocktailsData from "../src/assets/Recipes.json";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/CocktailDetailsPage/:cocktailId"
            element={<CocktailDetailsPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
