import React from "react";
import Movie from "./Movie";

function Movies ({movies, deleteMovie}) {
    return (
        <ul id="movies">
            {movies.map((movie, index) => (
                <Movie key={index} movie={movie} deleteMovie={deleteMovie} />
            ))}
        </ul>
    );
}

export default Movies