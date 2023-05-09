import { setWord } from "../actions/hangmanActions";

// Function to fetch a new word and update the state accordingly
export const fetchWordUpdateState = async (dispatch) => {
    // Fetch a random word from the API
    const response = await fetch('https://random-word-api.vercel.app/api?words=1');
    const word = (await response.json())[0].toUpperCase();

    // Update the Redux state with the new word, reset guessed letters, and reset status
    dispatch(setWord(word));
    dispatch({ type: 'RESET_GUESSED_LETTERS' });
    dispatch({ type: 'RESET_STATUS' });
};
