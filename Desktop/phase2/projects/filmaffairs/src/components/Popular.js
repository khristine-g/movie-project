import React, { useState, useEffect } from "react";
import "./Popular.css";
function Popular() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=36abea3582203c7689f8273cff6a9daa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.results));
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  const popularMovies = data.filter((movie) => movie.popularity >= 20);
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  const handleGoBack = () => {
    setSelectedMovie(null);
  };
  return (
    <div className="popular-container">
      <h2 className="heading">Popular Movies</h2>
      <div className="popular-list">
        {selectedMovie ? (
          <div className="popular-item-details">
            <img
              src={`https://image.tmdb.org/t/p/w185/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className="popular-img-details"
            />
            <div className="popular-details">
              <h3 className="popular-title-details">{selectedMovie.title}</h3>
              <p className="popular-overview">{selectedMovie.overview}</p>
              <p className="popular-release-date">
                Release Date: {selectedMovie.release_date}
              </p>
              <button className="back-btn" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          </div>
        ) : (
          popularMovies.map((movie, index) => (
            <div
              className="popular-item"
              key={index}
              onClick={() => handleMovieClick(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={movie.title}
                className="popular-img"
              />
              <div className="popular-title">{movie.title}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Popular;