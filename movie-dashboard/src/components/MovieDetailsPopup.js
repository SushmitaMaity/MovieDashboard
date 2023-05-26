import React from "react";

const MovieDetailsPopup = ({ movie, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h4>{movie.original_title}</h4>
        <p>Description: {movie.overview}</p>
        <h3>Average Rating: {movie.vote_average}</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MovieDetailsPopup;
