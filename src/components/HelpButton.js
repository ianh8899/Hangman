import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGameRules } from '../actions/HangmanActions';

const HelpButton = () => {
    const dispatch = useDispatch();
    // Get the gameRulesVisible value from the Redux state
    const gameRulesVisible = useSelector((state) => state.hangman.gameRulesVisible);

    // Function to handle the click event on the Help button
    const handleClick = () => {
        // Dispatch the toggleGameRules action to update the gameRulesVisible value in the state
        dispatch(toggleGameRules());
    };

    return (
        // Render the button with a dynamic label based on the gameRulesVisible value
        <button onClick={handleClick}>
            {gameRulesVisible ? 'Close Help' : 'Help'}
        </button>
    );
};

export default HelpButton;
