import React from 'react'

export default function Home({ activateComponent }) {
    
    return (
        <div className="home">
            <h1>Hangman</h1>
            <button onClick={() => activateComponent("game")}>New Game</button>
            <button onClick={() => activateComponent("instructions")}>How to Play</button>
        </div>
    );
}
