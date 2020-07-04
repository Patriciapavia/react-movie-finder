import React, { useState, useEffect } from "react";
import axios from "axios";
import FindMovie from "./FindMovie";
import DisplayMovie from "./DisplayMovie";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await axios(
        `https://www.omdbapi.com/?s=harry potter&apikey=5bb03fee`
      );
      console.log(result.data);
      setMovies(result.data.Search);
      setIsloading(false);
    };
    fetchMovie();
  }, []);
  return (
    <div>
      <FindMovie />
      <DisplayMovie isLoading={isLoading} movies={movies} />
    </div>
  );
};

export default App;
