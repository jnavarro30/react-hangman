import React from 'react'

export default function Game({ activateComponent }) {
    const alphabet = () => {
        let arr = [...Array(123).keys()].slice(97);
        return arr.map(num => String.fromCharCode(num));
    }

    return (
        <div className="game">
            <div className="stats">
                <p>Lives: 7</p>
                <canvas></canvas>
                <p id="chosenWord" >The-Chosen-Word</p>
            </div>
             <div className="alphabet">
                {
                alphabet().map(ltr => (
                  <div className="letter" key={ltr}>{ltr}</div>
                ))
                }
                <button onClick={() => activateComponent("home")}>
                <i className="material-icons">home</i>
            </button>
            </div>
        </div>
    )
}
