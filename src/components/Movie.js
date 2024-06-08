import React from "react";
import deleteIcon from "../Images/delete.png";
import star from "../Images/star.png";


const Movie = ({ title, rating, onDelete }) => {
    const stars = Array(rating).fill(<img src={star} alt="star" className="star-icon" />);
  
    return (
      <li className="movie-item" data-title={title} data-grade={rating}>
        <span>{title}</span>
        {stars}
        <img src={deleteIcon} alt="delete" className="delete-movie-icon" onClick={onDelete} />
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