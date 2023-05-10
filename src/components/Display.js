import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
    // Get the word and guessedLetters values from the Redux state
    const word = useSelector((state) => state.hangman.word);
    const guessedLetters = useSelector((state) => state.hangman.guessedLetters);

    // Create the display word by replacing unguessed letters with underscores
    const displayWord = word
        .split('')
        .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');

    // Render the display word with guessed letters revealed
    return (
        <div>
            <h2>{displayWord}</h2>
        </div>
    );
};

export default Display;
