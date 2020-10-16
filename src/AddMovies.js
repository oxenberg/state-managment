import React, { useState, useContext } from 'react'
import { MoviesContext } from "./MoviesContext"
const AddMovies = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MoviesContext)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovies = e => {
        e.preventDefault();
        setMovies(prevMovies => [
            {
                name: name,
                price: price,
                id: String(Number(prevMovies.id) + 1)
            }
            , ...prevMovies])
    }
    return (
        <form onSubmit={addMovies}>
            <input type="text" name="name" value={name} onChange={updateName}></input>
            <input type="text" name="price" value={price} onChange={updatePrice}></input>
            <button>Submit</button>
        </form>
    )
}

export default AddMovies