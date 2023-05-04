import React from "react";
import MovieList from "./components/MovieList";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import "./components/MovieList.css"
import "./components/Trending.css"
import "./components/Popular.css"



function App() {
  return (
    <div>
      <MovieList />
      <Trending/>
      <Popular/>
      
    </div>
  );
}

export default App;


