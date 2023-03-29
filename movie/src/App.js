import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("James Bond");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=64da8953&s=${search}&type=movie`);
      setMovies(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <p>{movie.Year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

