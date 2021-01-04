import React from 'react'
import click from "../audio/click.mp3";

export default function Home() {
    const soundEffectHandler = _ => new Audio(click).play();
    return (
        <div className="main">
            <h1>Hangman</h1>
            <button onClick={soundEffectHandler}>New Game</button>
            <button onClick={soundEffectHandler}>How to Play</button>
        </div>
    );
}
