import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Details = (props) => {
  const [details, setDetails] = useState({});
  console.log(props);
  useEffect(() => {
    fetchMovie();
  }, [props.match.params.id]);

  const fetchMovie = async () => {
    const result = await axios(
      `https://www.omdbapi.com/?i=${props.match.params.id}&apikey=5bb03fee`
    );
    console.log(result.data);
    setDetails(result.data);
  };

  if (details === undefined) {
    return <h1>Not Found</h1>;
  } else {
    return (
      <>
        <div className="container">
          <div className="card">
            <div className="row">
              <div className="col-md-4">
                <img
                  className="display-img img-thumbnail rounded mx-auto d-block"
                  src={details.Poster}
                  alt="poster "
                ></img>
              </div>
              <div className="col-md-8">
                <h2 className="card-title">{details.Title}</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Genre:</strong> {details.Genre}
                  </li>
                  <li className="list-group-item">
                    <strong>Released:</strong> {details.Released}
                  </li>
                  <li className="list-group-item">
                    <strong>Rated:</strong> {details.Rated}
                  </li>
                  <li className="list-group-item">
                    <strong>IMDB Rating:</strong> {details.imdbRating}
                  </li>
                  <li className="list-group-item">
                    <strong>Director:</strong> {details.Director}
                  </li>
                  <li className="list-group-item">
                    <strong>Writer:</strong> {details.Writer}
                  </li>
                  <li className="list-group-item">
                    <strong>Actors:</strong> {details.Actors}
                  </li>
                  <li className="list-group-item">
                    <strong>Plot:</strong> {details.Plot}
                  </li>
                  <a
                    target="_blank"
                    href={`https://imdb.com/title/${details.imdbID}`}
                    className="btn btn-primary rounded mx-auto  btn-block"
                  >
                    View IMDB
                  </a>

                  <Link to={`/`} className="btn btn-outline-dark btn-block">
                    Go Back To Search
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Details;
