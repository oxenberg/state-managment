import React, { useState, createContext } from 'react'


export const MoviesContext = createContext()

export const MoviesProvider = (props) => {
    const [movies, setMovie] = useState([
        {
            name: "movie1",
            price: "$10",
            id: "123"
        },
        {
            name: "movie2",
            price: "$12",
            id: "122"
        },
        {
            name: "movie3",
            price: "$31",
            id: "133"
        }
    ])

    return (
        <MoviesContext.Provider value={[movies, setMovie]}>
            {props.children}
        </MoviesContext.Provider>
    )
}