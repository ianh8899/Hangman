import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import Status from './components/Status';
import NewGameButton from './components/NewGameButton';
import HelpButton from './components/HelpButton';
import GameRules from './components/GameRules';
import { fetchWordUpdateState } from "./components/FetchWord";

const HangmanApp = () => {
    const dispatch = useDispatch();

    // Fetch a new word and set the state on component mount
    useEffect(() => {
        (async () => {
            await fetchWordUpdateState(dispatch);
        })();
    }, [dispatch]);

    return (
        <div>
            <h1>Welcome to Hangman!</h1>
            {/* Show the status of the game (failed attempts and hangman image) */}
            <Status />
            {/* Display the word to guess */}
            <Display />
            {/* Render the virtual keyboard */}
            <Keyboard />
            {/* New game button to reset the state and fetch a new word */}
            <NewGameButton />
            {/* Help button to toggle the visibility of the game rules */}
            <HelpButton />
            {/* Game rules component (initially hidden) */}
            <GameRules />
        </div>
    );
};

export default HangmanApp;
