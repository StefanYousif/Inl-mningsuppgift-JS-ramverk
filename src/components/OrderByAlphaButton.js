import React from "react";

// Komponenten OrderByAlphaButton renderar en knapp som sorterar filmer i alfabetisk ordning.
// Den får sortMoviesByTitle-funktion som prop.
const OrderByAlphaButton = ({ sortMoviesByTitle }) => {
    return (
        <button className="btn btn-primary m-1" onClick={sortMoviesByTitle}>
            Alfabetisk ordning
        </button>
    );
};

export default OrderByAlphaButton;