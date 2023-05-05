import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Trending.css";
function Trending() {
  const url =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=36abea3582203c7689f8273cff6a9daa";
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.results));
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  const trendingMovies = data.filter((movie) => movie.popularity > 20);
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  const handleBackClick = () => {
    setSelectedMovie(null);
  };
  return (
    <div className="trending">
      <h2 className="heading">Trending Movies</h2>
      {selectedMovie ? (
        <div className="movie-details">
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            className="movie-img"
          />
          <div className="movie-title">{selectedMovie.title}</div>
          <div className="movie-rating">Rating: {selectedMovie.vote_average}</div>
          <div className="movie-release">Release Date: {selectedMovie.release_date}</div>
          <div className="movie-overview">Overview: {selectedMovie.overview}</div>
          <button className ="back-btn"onClick={handleBackClick}> Go Back</button>
          <button  className= "back-btn" onClick={navigate(`/trailers/${selectedMovie.id}`)}>Watch Trailer</button>
        </div>
      ) : (
        <div className="movies-container">
          {trendingMovies.map((movie) => (
            <div className="movie-item" key={movie.id} onClick={() => handleMovieClick(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="movie-img"
              />
              <div className="movie-title">{movie.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Trending;