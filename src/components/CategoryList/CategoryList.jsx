import React from "react";
import CategoryItem from "../CategoryItem";
import styles from "./CategoryList.module.css";
import cn from "classnames";

function CategoryList(props) {
  const { catalog } = props;

  return (
    <div className={cn(styles["item-list"], "list")}>
      {catalog.map((el) => {
        return <CategoryItem key={el.idCategory + el.strCategory} {...el} />;
      })}
    </div>
  );
}

export default CategoryList;
