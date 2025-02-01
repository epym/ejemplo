// script.js
let score = 0;
const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', function() {
    score++;
    scoreDisplay.textContent = score;
});
