import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWordUpdateState } from "./FetchWord";

const NewGameButton = () => {
    // Access the dispatch function from Redux using the useDispatch hook
    const dispatch = useDispatch();

    // Define the handleClick function to be called when the button is clicked
    const handleClick = async () => {
        await fetchWordUpdateState(dispatch);
    };

    // Render the button with the handleClick function attached to the onClick event
    return (
        <button onClick={handleClick}>New Game</button>
    );
};

export default NewGameButton;
