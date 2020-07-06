import React from "react";
import DisplayMoviesItem from "./DisplayMoviesItem";

const DisplayMovie = ({ movies }) => {
  return movies ? (
    <section>
      <div className="row">
        {movies.map((movie) => (
          <DisplayMoviesItem key={movie.imdbID} movie={movie}>
            {" "}
          </DisplayMoviesItem>
        ))}
      </div>
    </section>
  ) : (
    <section>
      <h1>Not Found! Please try different name </h1>
    </section>
  );
};

export default DisplayMovie;
