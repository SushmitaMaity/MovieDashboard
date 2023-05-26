// MovieList.js

import React from "react";
import MovieItem from "./MovieItem";
import './MovieList.css';


const MovieList = ({ movies, onFavoriteClick, favoriteMovies}) => {
  return (
    <div className="container">
      {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} onFavoriteClick={onFavoriteClick} favoriteMovies={favoriteMovies}/>
      ))}
      </div>
  );
};

export default MovieList;
