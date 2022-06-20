import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <>
      <div>Movie {id}</div>
      <button className="btn" onClick={() => navigate(-1)}>
        CLick
      </button>
    </>
  );
}

export default Movie;
