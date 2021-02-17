import React from 'react';
// media
import click from "../audio/click.mp3";

export default function Game({ activateComponent, isActive, lives, setLives,
    chosenWord, setChosenWord, hiddenWord, setHiddenWord, runWordnikApi, setRunWordnikApi }) {

    const alphabet = () => {
        let arr = [...Array(123).keys()].slice(97);
        return arr.map(num => String.fromCharCode(num));
    }

    const hideLetter = (id) => {
        const letterEl = document.getElementById(id);
        new Audio(click).play();
        letterEl.style.visibility = "hidden";

        revealHiddenWord(id);
    }

    const revealHiddenWord = (id) => {
        if(chosenWord.includes(id)) {
            let result = [...hiddenWord];

            [...chosenWord].forEach((ltr, index) => {
                if(ltr === id) result[index] = id;
            });

            setHiddenWord(result);
        }
        else setLives((prevLives) => prevLives - 1);
        winLose();
    }

    const winLose = () => {
        if(chosenWord === hiddenWord) {
            console.log("You Win!...");
            activateComponent("results");
        }
        if(lives === 1) {
            console.log("You Lose!...");
            activateComponent("results");
        } 
    }

    const homeButton = () => {
        activateComponent("home");
        const letterEls = document.getElementsByClassName("letter");
        [...letterEls].forEach(elem => elem.style.visibility = "visible");
        setRunWordnikApi(!runWordnikApi);
        setLives(7);
    }

    return (
        <div className="game" style={{"display": isActive.game? "flex" : "none"}}>
            <div className="stats">
                <p>Lives: {lives}</p>
                <canvas></canvas>
                <p id="chosenWord" >{hiddenWord}</p>
            </div>
             <div className="alphabet">
                {
                alphabet().map(ltr => (
                  <div
                    id={ltr}
                    className="letter" 
                    key={ltr} 
                    onClick={() => hideLetter(ltr)}>
                      {ltr}
                  </div>
                ))
                }
                <div id="-" className="letter" key="-" onClick={() => hideLetter("-")}>
                 -
                </div>
                <button onClick={homeButton}>
                    <i className="material-icons">home</i>
                </button>
            </div>
        </div>
    )
}


