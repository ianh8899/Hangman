import { configureStore } from '@reduxjs/toolkit';
import hangmanReducer from '../reducers/hangmanReducer';

const store = configureStore({
    reducer: {
        hangman: hangmanReducer,
    },
});

export default store;
