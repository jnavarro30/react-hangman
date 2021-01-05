import React from 'react'

export default function Instructions({ soundEffectHandler }) {
    return (
        <div className="instructions">
            <h1>Instructions</h1>
            <ul>
                <li>Guess the word with one letter at a time.</li>
                <li>If the word does not contain the letter, you lose a life.</li>
                <li>You have 7 lives to save Mr. Stick from the gallows.</li>
                <li>Hyphenated words are possible.</li>
            </ul>
            <button onClick={soundEffectHandler}>Main Menu</button>
        </div>
    )
}
