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
      ingredients: [
        "1.5 oz tequila",
        "1 oz lime juice",
        "0.5 oz triple sec",
        "Salt for the rim",
        "Lime wedge for garnish",
      ],
    },
    {
      id: "2",
      cocktailName: "Pumptini",
      image: "../../public/pumptini.png",
      ingredients: [
        "1.5 oz tequila",
        "1 oz lime juice",
        "0.5 oz triple sec",
        "Salt for the rim",
        "Lime wedge for garnish",
      ],
    },
  ]);

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
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
          <form onSubmit={handleSubmit}>
            <span>Add your recipe</span>
            <div>
              <label>
                Cocktail Name
                <input
                  name="cocktailName"
                  type="text"
                  value={cocktailName}
                  onChange={(e) => setCocktailName(e.target.value)}
                />
              </label>

              <label>
                Ingredients
                <input
                  name="ingredients"
                  type="text"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
              </label>

              <label>
                Preparation Time
                <input
                  name="time"
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </label>
              <label>
                Difficulty
                <input
                  name="difficulty"
                  type="text"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                />
              </label>
              <label>
                preparation
                <input
                  name="preparation"
                  type="text"
                  value={preparation}
                  onChange={(e) => setPreparation(e.target.value)}
                />
              </label>
              <label>
                Image
                <input
                  name="image"
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </label>
              <button type="submit">Add Recipe</button>
            </div>
          </form>
        </div>

        <div className="right-section">
          <img className="image-half" src="../../public/cocktail-shoot.png" />
        </div>
      </div>
      <div className="fav-slider">
        {/* <Link to={`/CocktailDetailsPage/${id}`}> */}
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
        {/* </Link> */}
      </div>
      <div className="accordion-wrapper">
        <div className="accordion">
          {favDrinks.map((favDrink, i) => (
            <div className="item" key={favDrink.id}>
              <div className="name" onClick={() => toggle(i)}>
                <h2>{favDrink.cocktailName}</h2>
                <span>{selected === i ? "-" : "+"} </span>
              </div>
              {selected === i && (
                <div className="content.show">{favDrink.ingredients}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddRecipe;
