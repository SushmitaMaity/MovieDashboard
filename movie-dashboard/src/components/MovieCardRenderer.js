import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Dashboard from "./Dashboard";

const MovieCardRenderer =()=> {
  debugger;
const {post} = Dashboard();
debugger;
console.log("post :::", post);
    return (
        
      <div className="launchView">
        {post && post.length && post.map((data) => (
          <MovieCard key={data.id} {...data} addToFavorite={addToFavorite} />
        ))}
      </div>
    );
  
}
export default MovieCardRenderer;