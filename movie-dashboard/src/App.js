import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import FavMovies from "./components/FavMovies";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/approved" element={<FavMovies />} />
      </Routes>
    </Router>
  );
};

export default App;
