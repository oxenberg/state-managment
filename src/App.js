import React from 'react';
import MovieList from "./MovieList"
import Nav from "./Nav"
import { MoviesProvider } from "./MoviesContext"
import AddMovies from "./AddMovies"
import './App.css';

function App() {
  return (
    <MoviesProvider>
      <div className="App">
        <Nav />
        <AddMovies />
        <MovieList />

      </div>
    </MoviesProvider>
  );
}

export default App;
