import React from "react";
import { useParams, useMatch, useLocation } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const value = useMatch();
  const value2 = useLocation();
  console.log(value);
  console.log(value2);
  return (
    <>
      <div>Movie {id}</div>
      <button className="btn">CLick</button>
    </>
  );
}

export default Movie;
