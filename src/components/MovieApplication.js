import React, { useState } from "react"
import AddMovieForm from "./AddMovieForm";
import Movies from "./Movies";
import OrderByGradeButton from "./OrderByGreadeButton";
import OrderByAlphaButton from "./OrderByAlphaButton";

function MovieApplication () {
    const [movies, setMovies] = useState([]);

    //lägg till film
    const addMovie = (title, rating) => {
        setMovies([...movies, {title, rating }]);
    };

    //Radera film
    const deleteMovie = (title) => {
        setMovies(movies.filter(movies => movies.title !== title));
    };

    //Sortera filmer (alfabetisk ordning)
    const sortMoviesByTitle = () => {
        setMovies([...movies].sort((a, b) => a.title.localcompare(b.title)));
    };

    //Sortera filmer (Betygordning)
    const sortMoviesByGrade = () => {
        setMovies([...movies].sort((a,b) => b.rating - a.rating));
    };

    return (
        <div className="container">
            <h1>Min filmlista</h1>
            <AddMovieForm addMovie={addMovie} />
            <hr />
            <h2>Filmer</h2>
            <Movies movies={movies} deleteMovie={deleteMovie} />
            <OrderByAlphaButton sortMoviesByTitle={sortMoviesByTitle} />
            <OrderByGradeButton sortMoviesByGrade={sortMoviesByGrade} />
        </div>
    );
}

export default MovieApplication;