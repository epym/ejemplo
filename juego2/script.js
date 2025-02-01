// script.js
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('checkButton');
const messageDisplay = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetButton = document.getElementById('resetButton');

checkButton.addEventListener('click', function() {
    const userGuess = Number(guessInput.value);
    
    // Validar que el número esté en el rango correcto
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDisplay.textContent = 'Por favor, ingresa un número entre 1 y 100.';
        return;
    }

    // Restar intentos y mostrar cuántos quedan
    attemptsLeft--;
    attemptsDisplay.textContent = attemptsLeft;

    // Verificar el número adivinado
    if (userGuess === secretNumber) {
        messageDisplay.textContent = `¡Felicidades! Adivinaste el número ${secretNumber}!`;
        messageDisplay.style.color = 'green';
        checkButton.disabled = true;
        resetButton.style.display = 'block';
    } else if (userGuess < secretNumber) {
        messageDisplay.textContent = 'El número es más alto. ¡Intenta de nuevo!';
        messageDisplay.style.color = 'blue';
    } else {
        messageDisplay.textContent = 'El número es más bajo. ¡Intenta de nuevo!';
        messageDisplay.style.color = 'blue';
    }

    // Limpiar el campo de texto si no es correcto
    guessInput.value = '';

    // Comprobar si se acabaron los intentos
    if (attemptsLeft === 0) {
        messageDisplay.textContent = `Perdiste. El número era ${secretNumber}.`;
        messageDisplay.style.color = 'red';
        checkButton.disabled = true;
        resetButton.style.display = 'block';
    }
});

// Funcionalidad de presionar Enter para hacer el clic
guessInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkButton.click();
    }
});

resetButton.addEventListener('click', function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    attemptsDisplay.textContent = attemptsLeft;
    guessInput.value = '';
    messageDisplay.textContent = '';
    checkButton.disabled = false;
    resetButton.style.display = 'none';
});
