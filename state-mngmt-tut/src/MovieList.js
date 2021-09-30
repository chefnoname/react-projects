import { useContext, useState } from "react";
import Movie from "./Movie";
import { MovieCtx } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieCtx);
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
