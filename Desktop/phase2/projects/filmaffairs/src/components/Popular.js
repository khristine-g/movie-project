import React, { useState, useEffect } from "react";
import "./Popular.css";

function Popular() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=36abea3582203c7689f8273cff6a9daa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.results));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const popularMovies = data.filter((movie) => movie.popularity >= 20);

  return (
    <div className="popular-list">
      <h2 className="heading"> Popular</h2>
      {popularMovies.map((movie, index) => (
        <div className="popular-item" key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={movie.title}
            className="popular-img"
          />
          <div className="popular-title">{movie.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Popular;
