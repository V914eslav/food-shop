import React from "react";
import Meal from "../Meal/Meal";

import styles from "./MealList.module.css";
import cn from "classnames";

function MealList({ meals }) {
  return (
    <div className={cn(styles["item-list"], "list")}>
      {meals.map((meal) => {
        return <Meal key={meal.idMeal} {...meal} />;
      })}
    </div>
  );
}

export default MealList;
