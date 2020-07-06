import React, { useState } from "react";
import axios from "axios";
import DisplayMovie from "./DisplayMovie";

function GetMovie() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [query, setQuery] = useState([]);

  const fetchMovie = async () => {
    const result = await axios(
      `https://www.omdbapi.com/?s=${query}&apikey=5bb03fee`
    );
    console.log(result.data);
    setMovies(result.data.Search);
    setIsloading(false);
    setQuery("");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetchMovie();
    }
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      ></input>
      <DisplayMovie isLoading={isLoading} movies={movies} />
    </div>
  );
}

export default GetMovie;
