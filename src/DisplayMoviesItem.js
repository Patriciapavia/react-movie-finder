import React from "react";

const DisplayMoviesItem = ({ movie }) => {
  return (
    <div>
      <img src={movie.Poster}></img>
      <h1>{movie.Title}</h1>
      <h5>{movie.Year}</h5>
      <h5>{movie.imdbID}</h5>
    </div>
  );
};

export default DisplayMoviesItem;
