import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../../api";
import Preloader from "../../components/Preloader";

import styles from "./Recipe.module.css";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);
  console.log(recipe);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img
            className={styles.img}
            src={recipe.strMealThumb}
            alt={recipe.strMael}
          />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          {recipe.strYoutube ? (
            <div className="row">
              <h5>Video Recipe</h5>

              <iframe
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          ) : null}
          <button className="btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      )}
    </>
  );
}

export default Recipe;
