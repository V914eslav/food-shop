import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../../api";
import MealList from "../../components/MealList/MealList";
import Preloader from "../../components/Preloader";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
    // eslint-disable-next-line
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export default Category;
