import React from "react";

function MovieList(props) {
  return (
    <ul>
      {props.movies.map((movie) => (
        <li key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <p>{movie.Year}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
