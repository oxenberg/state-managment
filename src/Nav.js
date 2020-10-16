import React, { useContext } from 'react';
import { MoviesContext } from './MoviesContext';
function Nav() {
    const [movies, setMovie] = useContext(MoviesContext)
    return (
        <nav>
            <h3>Dev Ed</h3>
            <p>list of {movies.length} movies</p>
        </nav>
    );
}

export default Nav;
