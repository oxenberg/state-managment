import React, { useState, createContext, useEffect } from 'react'


export const MoviesContext = createContext()

export const MoviesProvider = (props) => {
    // const [movies, setMovie] = useState([
    //     {
    //         name: "movie1",
    //         price: 10,
    //         id: "123"
    //     },
    //     {
    //         name: "movie2",
    //         price: 12,
    //         id: "122"
    //     },
    //     {
    //         name: "movie3",
    //         price: 31,
    //         id: "133"
    //     }
    // ])
    const [movies, setMovie] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/movies")
            .then(res => res.json())
            .then(
                (result) => {
                    setMovie(result)
                }
            )
    }, [])

    return (
        <MoviesContext.Provider value={[movies, setMovie]}>
            {props.children}
        </MoviesContext.Provider>
    )
}