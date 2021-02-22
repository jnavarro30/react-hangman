import React, { useEffect } from 'react';
// media
import click from "../audio/click.mp3";
import win from "../audio/win.mp3";
import lose from "../audio/lose.mp3";

export default function Game({ activateComponent, isActive, lives, setLives,
    chosenWord, setChosenWord, hiddenWord, setHiddenWord, runWordnikApi, setRunWordnikApi, homeButton, setWinOrLose }) {

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

            setHiddenWord(result.join(""));
        }
        else setLives((prevLives) => prevLives - 1);
        winLose();
    }

    const winLose = () => {
        if(chosenWord === hiddenWord) {
            new Audio(win).play();
            setWinOrLose("Win");
            activateComponent("results");
        }
        if(lives === 1) {
            new Audio(lose).play();
            setWinOrLose("Lose");
            activateComponent("results");
        } 
    }

    useEffect(() => {
        if(chosenWord && chosenWord === hiddenWord) winLose();
    }, [chosenWord, hiddenWord])

    return (
        <div className="game" style={{"display": isActive.game? "flex" : "none"}}>
            <div className="stats">
                <p>Lives: {lives}</p>
                <canvas></canvas>
                <p id="chosenWord">{ hiddenWord }</p>
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


