import React from "react";
import axios from "axios";

function FindMovie() {
  const getMovie = () => {
    axios
      .get(`https://www.omdbapi.com/?s=harry potter&apikey=5bb03fee`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  getMovie();

  return (
    <div>
      <h1>Find Movie</h1>
    </div>
  );
}

export default FindMovie;
