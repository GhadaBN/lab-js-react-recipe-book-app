import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AddRecipe() {
  const [cocktailName, setCocktailName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [preparation, setPreparation] = useState("");
  const [image, setImage] = useState("");
  const [favDrinks, setFavDrinks] = useState([
    {
      id: "1",
      cocktailName: "Matcha Gin Sour",
      image: "../../public/matcha-gin-sour.png",
    },
    {
      id: "2",
      cocktailName: "Pumptini",
      image: "../../public/pumptini.png",
    },
  ]);

  const [selected, setSelected] = useState(null);
  const toggle = (field) => {
    if (selected === field) {
      setSelected(null); // Close the current field if it is already open
    } else {
      setSelected(field); // Open the clicked field
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFavDrinks([
      ...favDrinks,
      {
        id: uuidv4(),
        cocktailName,
        ingredients,
        time,
        difficulty,
        preparation,
        image,
      },
    ]);

    // Reset all fields after submission
    setCocktailName("");
    setIngredients("");
    setTime("");
    setDifficulty("");
    setPreparation("");
    setImage("");
  };

  return (
    <div className="add-recipe-page">
      <div className="cocktail-page">
        <div className="left-section">
          <div className="accordion-wrapper">
            <form onSubmit={handleSubmit}>
              <span>Add your recipe</span>

              <div className="accordion">
                <div className="item">
                  <div className="name" onClick={() => toggle("cocktailName")}>
                    <h2>Cocktail Name</h2>
                    <span>{selected === "cocktailName" ? "-" : "+"}</span>
                  </div>
                  {selected === "cocktailName" && (
                    <input
                      type="text"
                      value={cocktailName}
                      onChange={(e) => setCocktailName(e.target.value)}
                      autoFocus
                    />
                  )}
                </div>

                <div className="item">
                  <div className="name" onClick={() => toggle("ingredients")}>
                    <h2>Ingredients</h2>
                    <span>{selected === "ingredients" ? "-" : "+"}</span>
                  </div>
                  {selected === "ingredients" && (
                    <input
                      type="text"
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                      autoFocus
                    />
                  )}
                </div>

                <div className="item">
                  <div className="name" onClick={() => toggle("time")}>
                    <h2>Preparation Time</h2>
                    <span>{selected === "time" ? "-" : "+"}</span>
                  </div>
                  {selected === "time" && (
                    <input
                      type="text"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      autoFocus
                    />
                  )}
                </div>

                <div className="item">
                  <div className="name" onClick={() => toggle("difficulty")}>
                    <h2>Difficulty</h2>
                    <span>{selected === "difficulty" ? "-" : "+"}</span>
                  </div>
                  {selected === "difficulty" && (
                    <input
                      type="text"
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      autoFocus
                    />
                  )}
                </div>
                <div className="item">
                  <div className="name" onClick={() => toggle("preparation")}>
                    <h2>Preparation</h2>
                    <span>{selected === "preparation" ? "-" : "+"}</span>
                  </div>
                  {selected === "preparation" && (
                    <input
                      type="text"
                      value={preparation}
                      onChange={(e) => setPreparation(e.target.value)}
                      autoFocus
                    />
                  )}
                </div>

                <div className="item">
                  <div className="name" onClick={() => toggle("image")}>
                    <h2>Image</h2>
                    <span>{selected === "image" ? "-" : "+"}</span>
                  </div>
                  {selected === "image" && (
                    <input
                      type="url"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      autoFocus
                    />
                  )}
                </div>
              </div>

              <button type="submit" className="submit-button">
                Add Recipe
              </button>
            </form>
          </div>
        </div>

        <div className="right-section">
          <img className="image-half" src="../../public/cocktail-shoot.png" />
        </div>
      </div>
      <div className="fav-slider">
        {favDrinks &&
          favDrinks.map((favDrink) => (
            <div key={favDrink.id} className="drink-card-small">
              <div className="top-container">
                <h3>{favDrink.cocktailName}</h3>
              </div>
              <div className="image-container">
                <img src={favDrink.image} alt={favDrink.cocktailName} />
              </div>
              <div className="bottom-container">
                <h3>Go to recipe</h3>
              </div>
            </div>
          ))}
      </div>
      {/* <div className="accordion-wrapper">
        <div className="accordion">
          {favDrinks.map((favDrink, i) => (
            <div className="item" key={favDrink.id}>
              <div className="name" onClick={() => toggle(i)}>
                <h2>{favDrink.cocktailName}</h2>
                <span>{selected === i ? "-" : "+"} </span>
              </div>
              {selected === i && (
                <div className="content show">{favDrink.ingredients}</div>
              )}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default AddRecipe;
