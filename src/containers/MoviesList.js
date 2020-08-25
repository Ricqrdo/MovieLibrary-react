import React, { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";
import Search from "../components/Search";

export default function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState("avengers");

  const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=36867ede";

  // const getData = async () => {
  //   const response = await fetch("../../assets/data.json");
  //   const data = await response.json();
  //   setMoviesList(data);
  // };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${URL}&s=${keyword}`);
      const data = await response.json();

      if (!data.Search) {
        return setError("No data");
      }

      setError("");
      setMoviesList(data.Search);
      // console.log(data.Search);
    };
    getData();
  }, [keyword]);

  return (
    <>
      <Search setKeyword={setKeyword} />
      {moviesList.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          type={movie.Type}
        />
      ))}
    </>
  );
}
