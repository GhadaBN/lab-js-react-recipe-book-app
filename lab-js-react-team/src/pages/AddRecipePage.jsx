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
      name: "Matcha Gin Sour",
      ingredients: [
        "2 oz gin",
        "0.75 oz fresh lemon juice",
        "0.5 oz simple syrup",
        "1 tsp matcha powder",
        "1 egg white (optional for frothiness)",
        "Ice cubes",
      ],
      preparation_time: "5 minutes",
      difficulty: "Medium",
      preparation: [
        "In a shaker, combine gin, lemon juice, simple syrup, and matcha powder.",
        "Add egg white if using. Shake vigorously without ice to emulsify the egg.",
        "Add ice and shake again until well chilled.",
        "Strain into a chilled cocktail glass.",
        "Optionally, sprinkle a little matcha powder on top for garnish.",
      ],
      image: "../../public/matcha-gin-sour.png",
    },
  ]);

  console.log(favDrinks);

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

    console.log(
      cocktailName,
      ingredients,
      time,
      difficulty,
      preparation,
      image
    );
  };

  return (
    <div className="add-recipe">
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

      <div>
        {/* <Link to={`/CocktailDetailsPage/${id}`}> */}
        {favDrinks &&
          favDrinks.map((favDrink) => (
            <div key={favDrink.id} className="drink-card">
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
    </div>
  );
}

export default AddRecipe;
