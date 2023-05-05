import React, { useState, useEffect } from "react";
import "./MovieList.css";
import "./Trending.css";
function MovieList() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=36abea3582203c7689f8273cff6a9daa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showAllMovies, setShowAllMovies] = useState(true);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.results));
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowAllMovies(false);
  };
  const handleGoBack = () => {
    setSelectedMovie(null);
    setShowAllMovies(true);
  };
  return (
    <div className="movie-list">
        {/* <h2 className="heading">Free To Watch</h2> */}
      {showAllMovies ? (
        data.map((movie) => (
          <div
            className="movie-item"
            key={movie.id}
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="movie-img"
            />
            <div className="movie-title">{movie.title}</div>
          </div>
        ))
      ) : (
        <div className="movie-details-container">
          <div className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className="movie-img"
            />
            <div className="movie-title">{selectedMovie.title}</div>
            <div className="movie-details">
              <div>Rating: {selectedMovie.vote_average}</div>
              <div>Release Date: {selectedMovie.release_date}</div>
              <div>Overview: {selectedMovie.overview}</div>
              <button  className= "back-btn"onClick={handleGoBack}>Go Back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MovieList;