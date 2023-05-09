import './stylesheets/App.css';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import HangmanApp from './hangmanApp';

const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <HangmanApp/>
            </Provider>
        </div>
    );
};

export default App;
