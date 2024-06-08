import React from "react";
import Movie from "./Movie";

function Movies ({movies, deleteMovie}) {
    return (
        <ul id="movies">
            {movies.map((movie, index) => (
                <Movie key={index} title={movie.title} rating={movie.rating} onDelete={() => deleteMovie(index)} />
            ))}
        </ul>
    );
};

export default Movies