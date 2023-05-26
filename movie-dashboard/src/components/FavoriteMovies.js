import React from "react";

const FavoriteMovies = ({ movies, onFavoriteClick }) => {

  return (
    <div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
              <h4 className="movie-title">{movie.original_title}</h4>
              <h5 className="movie-release-date">Release Date: {movie.release_date}</h5>
              
              <button className="favorite-button" onClick={() => onFavoriteClick(movie)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite movies added yet.</p>
      )}
    </div>
    
  );
};

export default FavoriteMovies;
