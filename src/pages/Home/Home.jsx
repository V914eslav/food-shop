import React, { useEffect, useState } from "react";
import { getAllCargories } from "../../api";
import Preloader from "../../components/Preloader";
import CategoryList from "../../components/CategoryList";

function Home() {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    getAllCargories().then((data) => setCatalog(data.categories));
  }, []);
  // const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
  //   catalog;
  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
}

export default Home;
