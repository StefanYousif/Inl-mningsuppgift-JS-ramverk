import React from "react";

function orderByGradeButton({ sortMoviesByGrade }) {
    return (
        <button className="btn btn-primary m-1" onClick={sortMoviesByGrade}>
            Betygsordning
        </button>
    );
}

export default orderByGradeButton;