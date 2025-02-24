# hangman-game
Hangman web game to apply js fundamentals
a# Hangman Game

A fun, web-based implementation of the classic Hangman word guessing game.


## Features

- **Multiple Word Categories**: Choose from Animals, Countries, Fruits, or Sports
- **Intuitive Interface**: Clean, responsive design works on both desktop and mobile devices
- **Visual Hangman Drawing**: SVG-based drawing that updates with each wrong guess
- **Scoring System**: Track your successful guesses
- **Keyboard Support**: Use your physical keyboard or the on-screen buttons

## How to Play

1. Select a category from the dropdown menu
2. Try to guess the hidden word by clicking letters on the virtual keyboard
3. Each correct guess reveals that letter in the word
4. Each incorrect guess adds a part to the hangman drawing
5. Win by correctly guessing the entire word before the hangman is complete
6. Lose if the hangman drawing completes before you guess the word
7. Press "New Game" to start a new round

## Game Rules

- You have 6 incorrect guesses before losing
- Each correct guess reveals all instances of that letter in the word
- Your score increases by 10 points for each winning game
- Already guessed letters are disabled on the keyboard

## Technical Details

This game is built using:
- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- SVG for the hangman drawing

No external libraries or frameworks are required to run the game.

## Installation

1. Download the HTML file
2. Open it in any modern web browser (Chrome, Firefox, Safari, Edge)

That's it! No server or installation needed.

## Browser Compatibility

The game works in all modern browsers that support ES6 JavaScript features:
- Chrome (version 58+)
- Firefox (version 54+)
- Safari (version 10+)
- Edge (version 15+)

## Customization

You can easily modify the game by:

- Adding new word categories in the JavaScript `categories` object
- Changing the CSS variables to customize the color scheme
- Modifying the SVG drawing to change the hangman visualization
- Adjusting the `maxWrongGuesses` variable to make the game easier or harder

## License

This project is free to use, modify and distribute for personal or educational purposes.

## Acknowledgments

- Inspired by the classic Hangman paper and pencil game
- Created as a fun way to practice vocabulary and spelling