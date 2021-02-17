import React from 'react';

function Results({ isActive }) {
    return (
        <div className="results" style={{"display": isActive.results? "block" : "none"}}>
            "Da Results are in!"
        </div>
    )
}

export default Results;


// results page