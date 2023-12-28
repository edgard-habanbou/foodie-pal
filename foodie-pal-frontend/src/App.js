import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/reset-password/:token" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
