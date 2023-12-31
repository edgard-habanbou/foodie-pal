import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/reset-password/:token" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
