import React from "react";
import deleteIcon from "../Images/delet.png"
import starIcon from "../Images/star.png";
import { array } from "prop-types";

function Movie({movie, deleteMovie}) {
    return (
        <li data-grade={movie.rating} data-title={movie.title}>
            {movie.title}
            <img src={deleteIcon} alt="delete" className="delete-movie-icon" onClick={() => deleteMovie(movie.title)} />
            {array.from({length: movie.rating}, (_, i) => (
                <img key={i} src={starIcon} alt="star" className="star-icon" />
            ))}
        </li>
    );
}

export default Movie