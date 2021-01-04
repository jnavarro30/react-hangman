import React from 'react'
import click from "../audio/click.mp3";

export default function Home() {
    const soundEffect = _ => new Audio(click).play();
    return (
        <div className="main">
            <h1>Hangman</h1>
            <button onClick={soundEffect}>New Game</button>
            <button onClick={soundEffect}>How to Play</button>
        </div>
    );
}
