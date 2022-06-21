import React from "react";
import { Link } from "react-router-dom";

import styles from "./CategoryItem.module.css";
import cn from "classnames";

function CategoryItem(props) {
  const {
    idCategory: id,
    strCategory: name,
    strCategoryDescription: description,
    strCategoryThumb: img,
  } = props;
  return (
    <div className={cn("card", styles["card-item"])}>
      <div className="card-image">
        <img src={img} alt={name} />
      </div>
      <div className={cn("card-content", styles["card-content-item"])}>
        <span className="card-title">{name}</span>
        <p>{description.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${id}`} className="btn">
          Watch Category
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
