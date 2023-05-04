import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import MovieList from "./components/MovieList";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import "./components/MovieList.css"
import "./components/Trending.css"
import "./components/Popular.css"
import Trailer from "./components/Trailers";



function App() {
  return (
    
    <div>
      <Trending/>
     
      <MovieList />
      <Trailer/>
      
      <Popular/>
      
     
      
    </div>
  );
}

export default App;


