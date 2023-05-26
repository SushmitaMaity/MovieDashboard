import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const FAVORITE_MOVIES_ENDPOINT = `https://api.themoviedb.org/3/account/${process.env.REACT_APP_ACCOUNT_ID}/favorite`;


export const fetchToken = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/authentication/token/new`, {
      params: {
        api_key: API_KEY,
        accept: "application/json"
      },
    });
    const token = data.request_token;
    if (token) {
      localStorage.setItem('request_token', token);
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
    return token;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Token Id, please check API KEY");
  }
};

export const createSessionId = async () => {
  
  const token = localStorage.getItem('request_token');
  const params = {
    api_key: API_KEY,
    request_token: token,
  };
  
  axios.post(`${BASE_URL}/authentication/session/new`, null, { params })
    .then((response) => {
      const { session_id } = response.data;
      localStorage.setItem('session_id', session_id);
      return session_id;
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Failed to create Session Id, please check API KEY & Auth bearer");
    });
};

export const fetchMovies = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: page,
        accept: "application/json"
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch popular movies.");
  }
};

// Add a movie to favorites
export const addFavoriteMovie = async (movie) => {
  
  const options = {
    method: 'POST',
    url: FAVORITE_MOVIES_ENDPOINT,
    params: {session_id: localStorage.getItem('session_id')},
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
     Authorization: 'Bearer '+process.env.REACT_APP_BEARER_TOKEN
    },
    data: {media_type: 'movie', media_id: movie.id, favorite: true}
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add movie to favorites.");
  }
};


// Remove a movie from favorites
export const removeFavoriteMovie = async (movie) => {
  const options = {
    method: 'POST',
    url: FAVORITE_MOVIES_ENDPOINT,
    params: {session_id: localStorage.getItem('session_id')},
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_BEARER_TOKEN
    },
    data: {media_type: 'movie', media_id: movie.id, favorite: false}
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add movie to favorites.");
  }
};
export const fetchFavorites = async (page) => {
  const options = {
    method: 'GET',
    url: FAVORITE_MOVIES_ENDPOINT + '/movies',
    params: {language: 'en-US', page: '1', sort_by: 'created_at.asc'},
    headers: {
      accept: 'application/json',
  Authorization: 'Bearer '+process.env.REACT_APP_BEARER_TOKEN
    }
  };
    try {
      // Perform an API call or any other method to fetch the updated list of favorite movies
      const response = await axios.request(options); // Replace "/api/favorites" with the actual endpoint for fetching favorites
      if (response.status !== 200) {
        throw new Error("Failed to fetch favorite movies");
      }
  
      return response.data.results; // Assuming the response data contains an array of favorite movies
    } catch (error) {
      return error;
    }
  };