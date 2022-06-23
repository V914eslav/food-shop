import React from "react";
import { Link } from "react-router-dom";
import styles from "./Meal.module.css";
import cn from "classnames";

function Meal(props) {
  const { strMeal: name, idMeal: id, strMealThumb: img } = props;

  return (
    <div className={cn("card", styles["card-item"])}>
      <div className="card-image">
        <img src={img} alt={name} />
      </div>
      <div className={cn("card-content", styles["card-content-item"])}>
        <span className="card-title">{name}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${id}`} className={cn("btn", styles["link-btn"])}>
          Watch recipe
        </Link>
      </div>
    </div>
  );
}

export default Meal;
