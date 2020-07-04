import React from "react";
import DisplayMoviesItem from "./DisplayMoviesItem";

const DisplayMovie = ({ movies, isLoading }) => {
  return isLoading ? (
    <h1>loading...</h1>
  ) : (
    <section>
      {movies.map((movie) => (
        <DisplayMoviesItem key={movie.imdbID} movie={movie}>
          {" "}
        </DisplayMoviesItem>
      ))}
    </section>
  );
};

export default DisplayMovie;
