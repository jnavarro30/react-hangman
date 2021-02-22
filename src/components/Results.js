import React from 'react';

function Results({ activateComponent, isActive, setIsActive, homeButton, chosenWord, winOrLose }) {
    return (
        <div className="results" style={{"display": isActive.results? "grid" : "none"}}>
            <div>You { winOrLose }!</div>
            <div>The Word was <div>{ chosenWord }</div></div>
            <button onClick={ homeButton }><i className="material-icons">home</i></button>
        </div>
    )
}

export default Results;


// results page