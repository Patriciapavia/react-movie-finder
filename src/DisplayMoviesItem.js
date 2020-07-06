import React from "react";
import { Link } from "react-router-dom";

const DisplayMoviesItem = (props) => {
  const { movie } = props;
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <div classNamer="text-center">
            <img
              className="display-img img-thumbnail rounded mx-auto d-block"
              src={movie.Poster}
              alt="poster "
            ></img>

            <p className="card-body text-center">
              <strong>Movie Title:</strong>
              {movie.Title}
            </p>
            <p className="card-text text-center">
              <strong>Year:</strong>
              {movie.Year}
            </p>
            <Link
              to={`details/displaymovieitem/${movie.imdbID}`}
              className="btn btn-outline-dark btn-block"
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayMoviesItem;
