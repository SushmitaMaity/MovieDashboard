// // import axios from "axios";
// // import React, {useState, useEffect} from "react";

// // const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=078cd3e07f5e1ee5008a8ab06892b51c&language=en-US&page=";

// // export default function Dashboard(props){
// //     const [post, setPost] = useState(null);
// //     const [fav, setFav] = useState(null);

// //     // Loading data on mount
// //   useEffect(() => {
// //       async function getPost() {
// //         const response = await axios.get(baseURL);
// //         setPost([response.data.results]);
// //       }
// //       getPost();
// //   }, []);
  
// //   if (!post) return null;
// //   const addToFavorite = id => {
// //     const data = post.find(item => item.id === id);
// //     setFav({ ...fav, fav: data });
// //   };

// //   const deleteToFavorite = id => {
// //     const hapus = fav.filter(item => item.id !== id);
// //     this.setState({ fav: hapus });
// //   };

 
// //   return (
// //     <div>
// //          {/* <MovieCardRenderer moviesData = {post} 
// //          addToFavorite={addToFavorite}
// //          />  */}
// //           <div className="launchView">
// //         {post && post.length && post.map((data) => (
// //            <div className="eachLaunch">
// //            <div className="imageContainer">
// //              <img
// //                // src={props.poster_path}
// //                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
// //                alt="launchimg"
// //                className="launchImage"
// //              />
// //            </div>
// //            <br />
// //            <b style={{ color: "blue" }}>
// //              {data.original_title} 
// //            </b>
// //            <br />
// //            {data.release_date}
// //            <br />
// //            {/* <button onClick={addToFavorite(data.id)}>Favorite</button> */}
// //            <button onClick={() => addToFavorite(data.id)}>Favorite</button>
// //          </div>
// //         ))}
// //       </div>
       
// //     </div>
// //   );
// // }
// // import axios from "axios";
// // import React, { useState, useEffect } from "react";
// // import MovieDetails from "./MovieDetails";
// // import MovieItem from "./MovieItem";
// // import FavoriteMovies from "./FavoriteMovies";

// // const baseURL =
// //   "https://api.themoviedb.org/3/movie/popular?api_key=078cd3e07f5e1ee5008a8ab06892b51c&language=en-US&page=";

// // export default function Dashboard(props) {
// //   const [post, setPost] = useState(null);
// //   const [fav, setFav] = useState(null);
// //   const [page, setPage] = useState(1);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [open, setOpen] = useState(false);
// //   async function getPost() {
// //     setIsLoading(true);
// //     setError(null);
// //     try{
// //       const response = await axios.get(baseURL + page);

// //       setPost((prevResults)=> {
// //           if(prevResults) {
// //               return [...prevResults, ...response.data.results];
// //             }else {
// //                 return response.data.results;
// //             }
// //         });
// //         setPage((prevPage) => prevPage + 1);
// //     }catch (error) {
// //       setError(error);
// //     } finally {
// //       setIsLoading(false);
// //     }
    
// //   }
// //   useEffect(() => {
// //     //   debugger
// //     return ()=>getPost();
// //   }, []);

// //   const handleScroll = () => {
// //     const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
// //     const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
// //     const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    
// //     if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading) {
// //       getPost();
// //     }
// //   };
// //   useEffect(() => {
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, [isLoading, page]);

 
// //   if (!post) return null;

// // const addToFavorite = (id) => {
// //     const data = post.find((item) => item.id === id);
  
// //     setFav((prevFav) => {
// //       if (
// //         prevFav &&
// //         prevFav.length &&
// //         !prevFav.find((item) => item.id === id)
// //       ) {
// //         return [...prevFav, data];
// //       } else {
// //         return prevFav || [data];
// //       }
// //     });
// //   };
  
// //   const deleteToFavorite = (id) => {
// //     setFav((prevFav) => prevFav.filter((item) => item.id !== id));
// //   };

// //   const showMovieDetails = (id) => {
// //     setOpen(true);
// //   }
// // console.log("post", post);
// //   return (
// //     <div>
// //         {isLoading && <p>Loading...</p>}
// //     {error && <p>Error: {error}</p>}
// //     {/* <div className="popup"></div> */}
// //    {/* { open?<MovieDetails openState={open}/>:null} */}
// //       {/* <div className="launchView"> */}
// //       <div className="container">
// //         {post && 
// //           post.length &&
// //           post.map((data) => (
// //             // <div className="eachLaunch" key={data.id} onClick={()=> showMovieDetails(data.id)}>
// //             //   <div className="imageContainer">
// //             //     <img
// //             //       src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
// //             //       alt="launchimg"
// //             //       className="launchImage"
// //             //     />
// //             //   </div>
// //             //   <br />
// //             //   <b style={{ color: "blue" }}>{data.original_title}</b>
// //             //   <br />
// //             //   {data.release_date}
// //             //   <br />
// //             //   <button onClick={() => addToFavorite(data.id)}>Favorite</button>
// //             // </div>
// //             <MovieItem movie = {data}/>
// //           ))}
// //       </div>
// //       <FavoriteMovies/>
// //       {/* <div className="favList">
// //           {fav && fav.length &&
// //           fav.map((data)=>(
// //             <div className="eachLaunch" key={data.id}>
// //             <div className="imageContainer">
// //               <img
// //                 src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
// //                 alt="launchimg"
// //                 className="launchImage"
// //               />
// //             </div>
// //             <br />
// //             <b style={{ color: "blue" }}>{data.original_title}</b>
// //             <br />
// //             {data.release_date}
// //             <br />
// //             <button onClick={() => deleteToFavorite(data.id)}>Remove</button>
// //           </div>
// //           ))}
// //       </div> */}
// //     </div>
// //   );
// // }












// // App.js

// import React from "react";
// import MovieList from "./components/MovieList";
// // import FavoriteMovies from "./components/FavoriteMovies";
// // import MovieDetails from "./components/MovieDetails";
// // import { fetchMovies, addFavoriteMovie, removeFavoriteMovie, fetchFavorites, fetchToken, createSessionId } from "./components/MovieAPI";
// import "./style.css";
// import { Routes, Route } from "react-router-dom";
// import FavMovies from "./components/FavMovies";
// import Welcome from "./components/Welcome";

// const App = () => {
//   // const [movies, setMovies] = useState([]);
//   // const [favoriteMovies, setFavoriteMovies] = useState([]);
//   // const [selectedMovie, setSelectedMovie] = useState(null);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [error, setError] = useState(null);
//   // const [page, setPage] = useState(1);

// // useEffect(() => {
// //   // localStorage.clear();
// //   setIsLoading(true);
// //   setError(null);

// //   const fetchData = async () => {
// //     try {
// //       const moviesResponse = await fetchMovies(page);
// //       setMovies(moviesResponse);
// //       setPage((prevPage) => prevPage + 1);

// //       const token = await fetchToken();
// //       console.log("token in useEffect", token);

// //       const sessionId = await createSessionId();
// //       console.log("session ID in useEffect", sessionId);
// //     } catch (error) {
// //       setError("Failed to fetch popular movies. Please try again later.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return () =>fetchData();
// // }, []);


  
//     //   const handleScroll = () => {
//     //     // if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
//     //     //   return;
//     //     // }
//     //     const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//     // const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
//     // const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    
//     // if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading) {
        
//     //     fetchMovies(page)
//     //   .then((response) => {
//     //     setMovies((prevResults)=> {
//     //                         if(prevResults) {
//     //                             return [...prevResults, ...response];
//     //                           }else {
//     //                               return response;
//     //                           }
//     //                       });
//     //     setPage((prevPage) => prevPage + 1);
//     //   })
//     //   .catch((error) => {
//     //     setError("Failed to fetch popular movies. Please try again later.");
//     //   })
//     //   .finally(() => {
//     //     setIsLoading(false);
//     //   });
//     // }
//     //   };
      
//       // useEffect(() => {
//       //   window.addEventListener('scroll', handleScroll);
//       //   return () => window.removeEventListener('scroll', handleScroll);
//       // }, [isLoading, page]);

//   // const handleFavoriteClick = async (movie) => {
      
//   //   try {
//   //     setFavoriteMovies((prevFav) => {
//   //       if(prevFav &&
//   //                 prevFav.length &&
//   //                 !prevFav.find((item) => item.id === movie.id)
//   //               ) {
//   //                 return [...prevFav, movie];
//   //               } else {
//   //                 return prevFav || [movie];
//   //               }
//   //     });
//   //   } catch (error) {
//   //     setError("Failed to update favorite movies. Please try again later.");
//   //   }
//   // };
//   // const handleFavoriteClick = (movie) => {
//   //   debugger
//   //   try {
//   //     setFavoriteMovies((prevFav) => {
//   //       if (
//   //         prevFav &&
//   //         prevFav.length &&
//   //         !prevFav.find((item) => item.id === movie.id)
//   //       ) {
//   //         return [...prevFav, movie];
//   //       } else {
//   //         return prevFav ? prevFav : [movie]; // Check if prevFav is truthy, otherwise return [movie]
//   //       }
//   //     });
//   //   } catch (error) {
//   //     setError("Failed to update favorite movies. Please try again later.");
//   //   }
//   // };
//   // const handleFavoriteClick = (movie) => {
//   //   debugger
//   //   try {
//   //     setFavoriteMovies((prevFav) => {
//   //       if (
//   //         prevFav &&
//   //         prevFav.length &&
//   //         !prevFav.find((item) => item.id === movie.id)
//   //       ) {
//   //         return [...prevFav, movie];
//   //       } else {
//   //         return prevFav ? prevFav : [movie];
//   //       }
//   //     });

//   //     // Update favorite movies in localStorage
//   //     const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//   //     if (!favoriteMovies.find((item) => item.id === movie.id)) {
//   //       favoriteMovies.push(movie);
//   //       localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
//   //     }
//   //   } catch (error) {
//   //     setError("Failed to update favorite movies. Please try again later.");
//   //   }
//   // };
//   // const handleFavoriteClick = async (movie) => {
//   //   createSessionId();
//   //   debugger
//   //   try {
//   //     console.log("movie", movie);
//   //     await addFavoriteMovie(movie); // Assuming addFavoriteMovie is an asynchronous function that adds the movie to favorites
//   //     const updatedFavorites = await fetchFavorites(); // Assuming fetchFavorites is an asynchronous function that fetches the updated list of favorite movies
//   //     setFavoriteMovies(updatedFavorites);
//   //   } catch (error) {
//   //     setError("Failed to update favorite movies. Please try again later.");
//   //   }
//   // };
  
//   // const handleMovieClick = (movie) => {
//   //   setSelectedMovie(movie);
//   // };

//   // const handleBackClick = () => {
//   //   setSelectedMovie(null);
//   // };

//   return (
//     <Routes>
//     <Route path="/" element={<Welcome  />} />
//     {/* <Route path="/approved" element={<Movies />} /> */}
   
//     {/* <div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {!isLoading && !error && (
//         <div>
//           {selectedMovie ? (
//             <MovieDetails movie={selectedMovie} onBackClick={handleBackClick} />
//           ) : ( */}
            
//              <Route path="/approved" element={ <FavMovies/>
//              }/>
//           {/* )}
//         </div>
//       )}
//     </div> */}
//     </Routes>
//   );
// };

// export default App;
