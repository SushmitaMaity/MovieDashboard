# Movie Application

This is a movie application that allows users to browse, favorite, and unfavorite movies. Users can infinitely scroll through a collection of movies, view detailed information about each movie, and mark their favorite movies. The application is designed to be responsive and can be used on both mobile and desktop devices.

## Features

1. Infinite Scroll: Users can continuously scroll through movies without reaching an endpoint.

2. Movie Details: Users can view detailed information about each movie, such as title, release date, and synopsis.

3. Favorite and Unfavorite Movies: Users can mark movies as their favorites or remove them from their favorites list. The UI reflects the user's favorite movies.

4. Mobile and Desktop Browsing: The application is responsive and can be used on both mobile and desktop devices.

## Technologies Used

- React Hooks: The application is built using React Hooks, which provide a simple and efficient way to manage state in functional components.

- Axios: Axios is used to make API requests to the TMDB API, which provides movie data.

- CSS Grid: CSS Grid is used for styling the application, providing a flexible and responsive layout.

## How to Run the App

1. Clone this git repository to your local machine.

2. Generate an API key at [TMDB](https://www.themoviedb.org/) by creating an account.

3. Create a `.env` file in the root directory of the project and add the following parameters:
   ```
   REACT_APP_TMDB_API_KEY=your_api_key
   REACT_APP_ACCOUNT_ID=your_account_id
   REACT_APP_BEARER_TOKEN=your_bearer_token
   ```

4. Install the project dependencies by running the command `npm i` in the terminal.

5. Start the application by running the command `npm start` in the terminal.

6. Access the application in your web browser by visiting `http://localhost:3000`.

Enjoy browsing and favoriting movies in the application!

Screenshot of Desktop Application:
 <img src="https://github.com/SushmitaMaity/MovieDashboard/blob/main/Desktop_Responsive.png" >
 
Screenshot of Mobile Application:
 <img src="https://github.com/SushmitaMaity/MovieDashboard/blob/main/Mobile_responsive.png" >
