import React from "react";


import "./components/MovieList.css"
import "./components/Trending.css"
import "./components/Popular.css"
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Genre from "./pages/Genre";
import Search from "./pages/Search";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/genre/:name/:id" element={<Genre />} />
      <Route path="/search/:name" element={<Search />} />
    </Routes>
  );
}

export default App;


