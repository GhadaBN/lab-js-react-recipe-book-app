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
      setSelected(null); // Close the current field if already open
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
              <p className="big-title-form">ADD YOUR RECIPE</p>

              <div className="accordion">
                <div className="item">
                  <div className="name" onClick={() => toggle("cocktailName")}>
                    <p className="title-form">Cocktail Name</p>
                    <span className="expander">
                      {selected === "cocktailName" ? "-" : "+"}
                    </span>
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
                    <p className="title-form">Ingredients</p>
                    <span className="expander">
                      {selected === "ingredients" ? "-" : "+"}
                    </span>
                  </div>
                  {selected === "ingredients" && (
                    <textarea
                      name="ingredients"
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                      autoFocus
                      rows="6"
                    />
                  )}
                </div>

                <div className="item">
                  <div className="name" onClick={() => toggle("time")}>
                    <p className="title-form">Preparation Time</p>
                    <span className="expander">
                      {selected === "time" ? "-" : "+"}
                    </span>
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
                    <p className="title-form">Difficulty</p>
                    <span className="expander">
                      {selected === "difficulty" ? "-" : "+"}
                    </span>
                  </div>
                  {selected === "difficulty" && (
                    <select>
                      name="text" value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      autoFocus
                      <option value="">Select Difficulty</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  )}
                </div>
                <div className="item">
                  <div className="name" onClick={() => toggle("preparation")}>
                    <p className="title-form">preparation</p>
                    <span className="expander">
                      {selected === "preparation" ? "-" : "+"}
                    </span>
                  </div>
                  {selected === "preparation" && (
                    <textarea
                      name="preparation"
                      value={preparation}
                      onChange={(e) => setPreparation(e.target.value)}
                      autoFocus
                      row="4"
                    />
                  )}
                </div>

                <div className="item">
                  <div className="name" onClick={() => toggle("image")}>
                    <p className="title-form">Cover Image</p>
                    <span className="expander">
                      {selected === "image" ? "-" : "+"}
                    </span>
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
                ADD RECIPE
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
