import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateGuessedLetters, updateStatus } from '../actions/hangmanActions';

const Keyboard = () => {
    const dispatch = useDispatch();
    // Define separate strings for each row of the QWERTY keyboard
    const row1 = 'QWERTYUIOP';
    const row2 = 'ASDFGHJKL';
    const row3 = 'ZXCVBNM';
    // Get the word and guessedLetters from the Redux state
    const word = useSelector((state) => state.hangman.word);
    const guessedLetters = useSelector((state) => state.hangman.guessedLetters);

    // Function to handle letter click events
    const handleLetterClick = (letter) => {
        // If the letter has already been guessed, do nothing
        if (guessedLetters.includes(letter)) {
            return;
        }

        // If the word doesn't include the clicked letter, update the status
        if (!word.includes(letter)) {
            dispatch(updateStatus());
        }
        // Add the clicked letter to the guessedLetters array in the state
        dispatch(updateGuessedLetters(letter));
    };

    // Render the keyboard layout using a container and rows
    return (
        <div className="container">
            {/* Iterate over an array containing the three rows */}
            {[row1, row2, row3].map((row, rowIndex) => (
                // Create a new div with class 'row' for each row
                <div key={rowIndex} className="row justify-content-center">
                    {/* Split each row string into individual letters and create buttons for each */}
                    {row.split('').map((letter) => (
                        <div key={letter} className="col-1 keyboard-col">
                            <button
                                className="btn btn-primary letter-button"
                                onClick={() => handleLetterClick(letter)}
                                disabled={guessedLetters.includes(letter)}
                            >
                                {letter}
                            </button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;
