import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../../api";
import MealList from "../../components/MealList/MealList";
import Preloader from "../../components/Preloader";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
    // eslint-disable-next-line
  }, [name]);

  return <>{!meals ? <Preloader /> : <MealList meals={meals} />}</>;
}

export default Category;
