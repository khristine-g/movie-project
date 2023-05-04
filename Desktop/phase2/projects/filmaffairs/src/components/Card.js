import React from 'react';
import "./MovieList.css";
import "./Trending.css";


const Card = ({movie, handleMovieClick}) => {
    return (
        <div
            className="movie-item"
            key={movie.id}
            onClick={() => handleMovieClick?.(movie)}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="movie-img"
            />
            <div className="movie-title">{movie.title}</div>
        </div>
    )
}

export default Card;