import React from 'react';

function MovieFooter(props) {
  return (
    <footer>
      <p>Director: {props.director}</p>
      <p>Year: {props.year}</p>
    </footer>
  );
}

export default MovieFooter;