import React, { useState, useContext } from 'react';
import { MoviesContext } from './MoviesContext';

import Movie from "./Movie"

function MovieList() {
    const [movies, setMovies] = useContext(MoviesContext)

    return (
        <div>


            {
                movies.map((movie) => {
                    return (
                        <Movie name={movie.name} price={movie.price} key={movie.id} />
                    )
                })
            }
        </div>
    );
}

export default MovieList;