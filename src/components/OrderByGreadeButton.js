import React from "react";

// Komponenten orderByGradeButton renderar en knapp som sorterar filmer efter betyg.
// Den tar emot sortMoviesByGrade-funktion som prop.
const orderByGradeButton = ({ sortMoviesByGrade }) => {
    return (
        <button className="btn btn-primary m-1" onClick={sortMoviesByGrade}>
            Betygsordning
        </button>
    );
};

export default orderByGradeButton;