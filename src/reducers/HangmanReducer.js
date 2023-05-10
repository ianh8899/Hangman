// Define the initial state of the hangman game
const initialState = {
    word: '',               // The word to be guessed
    guessedLetters: [],     // An array of letters that the user has guessed
    status: 0,              // The number of failed attempts
    gameRulesVisible: false,// Determines if the game rules are visible
};

// Define the hangmanReducer function, which handles the state updates
const hangmanReducer = (state = initialState, action) => {
    switch (action.type) {
        // When a new word is set, update the state with the new word
        case 'SET_WORD':
            return { ...state, word: action.payload };
        // Toggle the visibility of the game rules
        case 'TOGGLE_GAME_RULES':
            return { ...state, gameRulesVisible: !state.gameRulesVisible };
        // Update the guessedLetters array with the new guessed letter
        case 'UPDATE_GUESSED_LETTERS':
            return { ...state, guessedLetters: [...state.guessedLetters, action.payload] };
        // Increment the status (number of failed attempts) by 1
        case 'UPDATE_STATUS':
            return { ...state, status: state.status + 1 };
        // Reset the guessedLetters array to an empty array
        case 'RESET_GUESSED_LETTERS':
            return { ...state, guessedLetters: [] };
        // Reset the status (number of failed attempts) to 0
        case 'RESET_STATUS':
            return { ...state, status: 0 };
        // If the action type does not match any of the cases, return the current state
        default:
            return state;
    }
};

// Export the hangmanReducer to be used in the Redux store
export default hangmanReducer;
