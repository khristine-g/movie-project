import React from "react";
import MovieList from "./components/MovieList";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import MovieForm from "./components/MovieForm";
import "./components/MovieList.css"
import "./components/Trending.css"
import "./components/Popular.css"
import "./components/MovieForm.css";






function App() {
  return (
    <div>
      <MovieList />
      <Trending/>
      <Popular/>
      <MovieForm/>
      
      
    </div>
  );
}

export default App;


