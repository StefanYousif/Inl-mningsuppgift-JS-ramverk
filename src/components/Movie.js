import React from "react";
import deleteIcon from "../Images/delete.png";
import star from "../Images/star.png";

// Movie-komponenten representerar ett enskilt filmelement i listan.
// Den visar filmens titel, betyg i form av stjärnor och en raderingsikon.
const Movie = ({ title, rating, onDelete }) => {
    // Skapa en array med stjärnikoner baserat på betyget
    const stars = Array.from({length: rating}, (_, index) => (
        <img key={index} src={star} alt="star" className="star-icon" />
    ));
  
    return (
        // Lista som representerar filmen
        <li className="movie-item" data-title={title} data-grade={rating}>
            <span>{title}</span>
            
            {/* delete-icon*/}
            <img src={deleteIcon} alt="delete" className="delete-movie-icon" onClick={onDelete} />
            {stars}
        </li>
    );
};
/*

function Movie({movie, deleteMovie}) {
    return (
        <li className="movie-item" data-grade={movie.rating} data-title={movie.title}>
            {movie.title}
            <img src={deleteIcon} alt="delete" className="delete-movie-icon" onClick={() => deleteMovie(movie.title)} />
            {array.from({length: movie.rating}, (_, i) => (
                <img key={i} src={starIcon} alt="star" className="star-icon" />
            ))}
        </li>
    );
}
*/

export default Movie