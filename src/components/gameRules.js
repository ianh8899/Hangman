import React from 'react';
import { useSelector } from 'react-redux';

const GameRules = () => {
    // Get the gameRulesVisible value from the Redux state
    const gameRulesVisible = useSelector((state) => state.hangman.gameRulesVisible);

    // If gameRulesVisible is false, do not render the component
    if (!gameRulesVisible) {
        return null;
    }

    // Render the game rules content when gameRulesVisible is true
    return (
        <div>
            <h3>Game Rules:</h3>
            <ul>
                <li>Guess the hidden word one letter at a time.</li>
                <li>If you make 10 incorrect guesses you lose the game</li>
                <li>Click the "New Game" button to start a new game.</li>
            </ul>
        </div>
    );
};

export default GameRules;
