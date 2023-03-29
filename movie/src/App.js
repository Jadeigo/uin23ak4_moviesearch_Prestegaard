import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import './App.css';

function App() {
  const [search, setSearch] = useState("James Bond");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=64da8953&s=${searchQuery}&type=movie`);
      setMovies(response.data.Search);
      setSearch(searchQuery);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch(search);
  }, []);

  return (
    <div className="app-container">
      <Search handleSearch={handleSearch} searchClassName="search-container" searchBarClassName="search-bar" searchButtonClassName="search-button" />
      <MovieList movies={movies} movieListClassName="movie-list" movieItemClassName="movie-item" />
    </div>
  );
}

export default App;
