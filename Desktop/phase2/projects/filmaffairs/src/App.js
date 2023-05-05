import React from "react";
import MovieList from "./components/MovieList";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import "./components/MovieList.css"
import "./components/Trending.css"
import "./components/Popular.css"
import Footer from './components/Footer';
import "./App.css"; 







function App() {
  return (
    <div>
      <MovieList />
      <Trending/>
      <Popular/>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;


