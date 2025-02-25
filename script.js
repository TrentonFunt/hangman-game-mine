// game data for each category
const categories = {
    animals: {
        words: ['mamba', 'penguin', 'peacocks', 'cat', 'leopard', 'cheetah', 'hippopotamus', 'iguana', 'whale', 'butterfly', 'eagle', 'periwinkle'],
        hint: 'guess the animal'
    },
    countries: {
        words: ['canada', 'nigeria', 'senegal', 'ghana', 'Nicaragua', 'Honduras', 'cameroon', 'malawi', 'Australia', 'benin', 'rwanda'],
        hint: 'guess the country'
    },
    fruits: {
        words: ['apple', 'soursop', 'kiwi', 'avocado', 'watermelon', 'pineapple', 'date', 'orange', 'strawberry', 'tangerine', 'mango'],
        hint: 'guess the fruit'
    },
    sports: {
        words: ['soccer', 'javelin', 'discus', 'shortput', 'tennis', 'archery', 'basketball', 'volleyball', 'polevault', 'fencing', 'baseball', 'swimming'],
        hint: 'guess the sport'
    },
}
// global variables
// state variables
// DOM elements
const wordDisplay = document.getElementById('word-display');
const keyboard = document.getElementById('keyboard');
const messageElement = document.getElementById('message');
const newGameBtn = document.getElementById('new-game-btn');
const triesLeft  = document.getElementById('tries-left');
const scoreElement = document.getElementById('score');
const hintElement = document.getElementById('hint');
const categorySelect = document.getElementById('category-select');
const hangmanParts = document.querySelectorAll('.hangman-part');

// main function that initialises the game

// call function
// add on-screen keyboard support