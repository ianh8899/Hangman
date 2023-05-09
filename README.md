# Hangman Game
Hangman is a word-guessing game. The objective of the game is to guess the hidden word one letter at a time. 
Players have a limited number of incorrect guesses they can make before losing the game.

## Table of Contents

- Rules of the Game
- Installation
- Running the App

## Rules of the Game
A word is randomly selected from a list of words.
The secret word is displayed as a series of underscores, with each underscore representing a letter in the word.
Players guess the word by clicking on the letter buttons.
If a guessed letter is in the word, the letter is revealed in all the positions in the word.
If the guessed letter is not in the word, the number of failed attempts increases by 1, and a part of the hangman figure is drawn.
The game ends when either the player correctly guesses the word or when the number of failed attempts reaches 10. (where the full figure is drawn)

## Installation
Follow these steps to install and run the Hangman app on your local machine:
1) Ensure that you have Node.js and npm installed on your machine. If not, download and install them from the official Node.js website.
2) Clone this repository to your local machine
3) Navigate to the project directory: enter "cd hangman-app" on windows
4) Install the project dependencies: enter "npm install"

## Running the App
1) In the project directory, enter "npm start"
2) Open your browser and navigate to http://localhost:3000 to view and interact with the app.
3) Play the game


------------------------------------------------------------------------------------------------------------------------
- The below was autocreated when creating the app. Contains useful info.
------------------------------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
