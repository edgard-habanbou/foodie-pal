import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Items from "./pages/Items";
import Diet from "./pages/Diet";
import Recipe from "./pages/Recipe";
import Cook from "./pages/Cook";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/reset-password/:token" element={<Auth />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/home/:id" element={<Recipe />} />
        <Route path="/cook/:id" element={<Cook />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/items" element={<Items />} />
        <Route path="/diet" element={<Diet />} />
      </Routes>
    </Router>
  );
}

export default App;
