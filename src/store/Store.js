import { configureStore } from '@reduxjs/toolkit';
import hangmanReducer from '../reducers/HangmanReducer';

const store = configureStore({
    reducer: {
        hangman: hangmanReducer,
    },
});

export default store;
