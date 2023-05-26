import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import FavoriteMovies from "./FavoriteMovies";
import {
  fetchMovies,
  addFavoriteMovie,
  removeFavoriteMovie,
  fetchFavorites,
  createSessionId,
} from "./MovieAPI";
import "../style.css";

const FavMovies = () => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // localStorage.clear();
    setIsLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const moviesResponse = await fetchMovies(page);
        setMovies(moviesResponse);
        setPage((prevPage) => prevPage + 1);
        const sessionId = await createSessionId();
        console.log("session ID in useEffect", sessionId);
      } catch (error) {
        setError("Failed to fetch popular movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    return () => fetchData();
  }, []);
  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading) {
      fetchMovies(page)
        .then((response) => {
          setMovies((prevResults) => {
            if (prevResults) {
              return [...prevResults, ...response];
            } else {
              return response;
            }
          });
          setPage((prevPage) => prevPage + 1);
        })
        .catch((error) => {
          setError("Failed to fetch popular movies. Please try again later.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, page]);

  const handleFavoriteClick = async (movie) => {
    try {
      console.log("movie", movie);
      await addFavoriteMovie(movie); // Assuming addFavoriteMovie is an asynchronous function that adds the movie to favorites
      const updatedFavorites = await fetchFavorites(page); // Assuming fetchFavorites is an asynchronous function that fetches the updated list of favorite movies
      console.log("updatedFavorites", updatedFavorites);
      setFavoriteMovies(updatedFavorites);
    } catch (error) {
      setError("Failed to update favorite movies. Please try again later.");
    }
  };

  const handleRemoveFavoriteClick = async (movie) => {
    try {
      console.log("movie in remove", movie);
      await removeFavoriteMovie(movie);
      const updatedFavorites = await fetchFavorites(page);
      console.log("updatedFavorites in remove", updatedFavorites);
      setFavoriteMovies(updatedFavorites);
    } catch (error) {
      setError("Failed to update favorite movies. Please try again later.");
    }
  };

  return (
    <div className="app-container">
      <div className="appChild-container">
        <div className="sticky-header">
          <h2>Movie List</h2>
        </div>
        <MovieList
          movies={movies}
          onFavoriteClick={handleFavoriteClick}
          favoriteMovies={favoriteMovies}
          style={{ height: "400px", overflowY: "scroll" }}
        />
      </div>

      <div
        className="appChild-container"
        style={{ height: "700px", overflowY: "scroll" }}
      >
        <div className="sticky-header">
          <h2>Favorite Movies</h2>
        </div>
        <FavoriteMovies
          movies={favoriteMovies}
          onFavoriteClick={handleRemoveFavoriteClick}
        />
      </div>
    </div>
  );
};
export default FavMovies;
