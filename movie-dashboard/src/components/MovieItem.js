import React, { useState, useEffect } from "react";
import MovieDetailsPopup from "./MovieDetailsPopup";

const MovieItem = ({ movie, onFavoriteClick, favoriteMovies }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showDetails, setDetails] = useState(false);
  
  useEffect(() => {
    // Check if the movie is already in favorites
    // const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const isMovieFavorite = favoriteMovies.some((favMovie) => favMovie.id === movie.id);
    setIsFavorite(isMovieFavorite);
  }, [movie, favoriteMovies]);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite); // Toggle the favorite status
    onFavoriteClick(movie); // Notify the parent component about the favorite click

    // Update the favorite movies in localStorage
    //const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    // if (isFavorite) {
    //   // Remove the movie from favorites
    //   const updatedFavorites = favoriteMovies.filter((favMovie) => favMovie.id !== movie.id);
    //   localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    // } else {
    //   // Add the movie to favorites
    //   favoriteMovies.push(movie);
    //   localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
    // }
  };


  const toggleDetails = () => {
    // setDetails(!showDetails);
    setDetails((prevShowDetails) => !prevShowDetails);
  };

return (
  <div className="movie-card">
    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
    <h4 className="movie-title">{movie.original_title}</h4>
    <h5 className="movie-release-date">Release Date: {movie.release_date}</h5>

<div className="button-container">
            <button className={`${isFavorite?"favorited":"favorite-button"}`} onClick={() => handleFavoriteClick(movie)}>
         {isFavorite ? "Favorited!" : "Add to Favorites"}
      </button>  
    <button className="favorite-button" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {showDetails && <MovieDetailsPopup movie={movie} onClose={() => setDetails(false)} />}
    
  </div>
);
};

export default MovieItem;


