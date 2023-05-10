# Hangman Game
Hangman is a word-guessing game. The objective of the game is to guess the hidden word one letter at a time.
Players have a limited number of incorrect guesses they can make before losing the game.

## Table of Contents

1. [Rules of the Game](#rules-of-the-game)
2. [Installation](#installation)
3. [Running the App](#running-the-app)
4. [Usage](#usage)
5. [Credits](#credits)

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

## Usage

On startup and after pressing new game you should be greeted with this screen. The number of failed attempts will be set to 0.
The API call should have been made and there should be a word pre-populated with the underscores. Obviously your word might be shorter/longer.
Press the letter buttons to start making guesses.
![startup](screenshots/Screenshot startup.png)

When you have made 10 incorrect guesses you should see the alert pop up. Clicking ok starts a new game.
![failed](screenshots/Screenshot failed.png)

When you have correctly guessed the work you should see the alert pop up. Clicking ok starts a new game.
![winning](screenshots/Screenshot winning.png)

The help button is a toggle for the game rules. It will change its name so can be used to open and close the rules
![helpopen](screenshots/Screenshot toggle help open.png)
![helpclosed](screenshots/Screenshot toggle help closed.png)

## Credits
Created by myself, with lots of help from YouTube, StackOverflow and Google.
