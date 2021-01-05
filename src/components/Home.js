import React from 'react'

export default function Home({ soundEffectHandler }) {
    
    return (
        <div className="home">
            <h1>Hangman</h1>
            <button onClick={soundEffectHandler}>New Game</button>
            <button onClick={soundEffectHandler}>How to Play</button>
        </div>
    );
}
