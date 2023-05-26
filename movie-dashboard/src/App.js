import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/approved" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
