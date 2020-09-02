import React, { useState, useEffect, Suspense } from "react";

import MovieCard from "../components/MovieCard";
import Search from "../components/Search";

// const Buttons = React.lazy(() => import("../components/Buttons"));
// const MovieCard = React.lazy(() => import("../components/MovieCard"));
// const Search = React.lazy(() => import("../components/Search"));
// const Loading = () => <div>Loading...</div>;

export default function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState("batman");
  let [page, setPage] = useState(1);

  const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=36867ede";

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${URL}&s=${keyword}&page=${page}`);
      const data = await response.json();

      if (!data.Search) {
        return setError("No data");
      }

      setError("");
      setMoviesList(data.Search);
      // console.log(data.Search);
    };
    getData();
  }, [keyword, page]);

  const nextPage = () => {
    setPage((page += 1));
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const previousPage = () => {
    setPage(page === 1 ? null : (page -= 1));
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
      <Search setKeyword={setKeyword} />
      <div className="movielist-container">
        {moviesList.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            type={movie.Type}
            poster={movie.Poster}
          />
        ))}
      </div>
      <div className="buttons">
        {page !== 1 && <button onClick={previousPage}>Previous Page</button>}
        <button onClick={nextPage}>Next Page</button>
      </div>
      {/* </Suspense> */}
    </>
  );
}
