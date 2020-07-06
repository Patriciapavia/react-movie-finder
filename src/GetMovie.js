import React, { useState } from "react";
import axios from "axios";
import DisplayMovie from "./DisplayMovie";
import Header from "./layout/Header";

function GetMovie() {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsloading] = useState(true);
  const [query, setQuery] = useState([]);

  const fetchMovie = async () => {
    const result = await axios(
      `https://www.omdbapi.com/?s=${query}&apikey=5bb03fee`
    );
    console.log(result.data);
    setMovies(result.data.Search);
    // setIsloading(false);
    setQuery("");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetchMovie();
    }
  };
  return (
    <div>
      <div className="card bg-secondary">
        <div className="card-body">
          <Header />
          <div className="d-flex justify-content-center margin-top:200px">
            <input
              className=" form-control-lg"
              placeholder="Search For  Movie..."
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={search}
            ></input>
          </div>
          <DisplayMovie movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default GetMovie;
