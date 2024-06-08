import React from "react";
import Movie from "./Movie";

// Movies-komponenten renderar en lista med Movie-komponenter.
// Den tar emot en lista med filmer och en deleteMovie-funktion som props.
function Movies ({movies, deleteMovie}) {

    return (
        // Den oordnade listan som ska innehålla de enskilda filmobjekten
        <ul id="movies">
            {/* går igenom movies-arrayen för att skapa en Movie-komponent för varje film */}
            {movies.map((movie, index) => (
                <Movie key={index} title={movie.title} rating={movie.rating} onDelete={() => deleteMovie(index)} />
            ))}
        </ul>
    );
};

export default Movies