// Action creators for the hangman app

// Action creator for setting the word to guess
export const setWord = (word) => ({
    type: 'SET_WORD',
    payload: word,
});

// Action creator for toggling the visibility of game rules
export const toggleGameRules = () => ({
    type: 'TOGGLE_GAME_RULES',
});

// Action creator for updating the guessedLetters array with the user's input
export const updateGuessedLetters = (letter) => ({
    type: 'UPDATE_GUESSED_LETTERS',
    payload: letter,
});

// Action creator for incrementing the status (number of failed attempts)
export const updateStatus = () => ({
    type: 'UPDATE_STATUS',
});
