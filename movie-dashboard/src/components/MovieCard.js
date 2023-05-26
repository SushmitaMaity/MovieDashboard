import React, {useState, useEffect} from "react";
export default function MovieCard(props) {
    const {
        poster_path,
        original_title,
        release_date,
        id,
        addToFavorite
      } = props;
    
  return (
    <>
    
      <div className="eachLaunch">
        <div className="imageContainer">
          <img
            // src={props.poster_path}
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="launchimg"
            className="launchImage"
          />
        </div>
        <br />
        <b style={{ color: "blue" }}>
          {original_title} 
        </b>
        <br />
        {release_date}
        <br />
        <button onClick={addToFavorite(id)}>Favorite</button>
      </div>
    </>
  );
}
