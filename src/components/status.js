import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWordUpdateState} from "./fetchWord";

const Status = () => {
    // Access the Redux state using useSelector hooks
    const status = useSelector((state) => state.hangman.status);
    const word = useSelector((state) => state.hangman.word);
    const guessedLetters = useSelector((state) => state.hangman.guessedLetters);
    const dispatch = useDispatch();

    // Use useEffect to check if the game is won or lost whenever the status, word, or guessedLetters change
    useEffect(() => {
        if (status === 10) {
            setTimeout(async () => {
                alert('Sorry you lost! Click OK to start a new game');
                await startNewGame();
            }, 400);
        } else if (word) {
            const wordGuessed = word.split('').every((letter) => guessedLetters.includes(letter));
            if (wordGuessed) {
                setTimeout(async () => {
                    alert('Congratulations! You won! Click OK to start a new game');
                    await startNewGame();
                }, 400);
            }
        }
    }, [status, guessedLetters, word]);

    // Function to start a new game by fetching a new word, resetting guessedLetters, and resetting status
    const startNewGame = async () => {
        await fetchWordUpdateState(dispatch);
    };


    return (
        <div>
            <h5>Failed Attempts: {status}</h5>
            {/* Render the hangman image based on the status value */}
            <img src={require(`../images/state${status}.GIF`)} alt={`Hangman with ${status} failed attempts`}/>
        </div>
    );
};

export default Status;
