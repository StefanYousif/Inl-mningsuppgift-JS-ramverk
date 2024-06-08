import React from "react";

const OrderByAlphaButton = ({ sortMoviesByTitle }) => {
    return (
        <button className="btn btn-primary m-1" onClick={sortMoviesByTitle}>
            Alfabetisk ordning
        </button>
    );
};

export default OrderByAlphaButton;