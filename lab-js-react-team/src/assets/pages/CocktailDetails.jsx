import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CocktailDetailsPage() {
  let { cocktailId } = useParams(); // Get the cocktail ID from the URL parameter

  return <h1>Cocktail Details for ID: {id}</h1>; // Placeholder for fetched data
}

export default CocktailDetailsPage;
