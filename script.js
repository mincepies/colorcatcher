// Get DOM elements
const startBtn = document.getElementById('start-btn');
const scoreDisplay = document.getElementById('score');
const colorBox = document.getElementById('color-box');

let score = 0;
let gameInterval;
let targetColor;

// Function to start the game
function startGame() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    startBtn.disabled = true;

    // Start the game loop
    gameInterval = setInterval(changeColor, 1000);
    colorBox.addEventListener('click', checkColor);
}

// Function to change the color of the box
function changeColor() {
    // Randomly select a color
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];
    targetColor = colors[Math.floor(Math.random() * colors.length)];

    colorBox.style.backgroundColor = targetColor;
}

// Function to check if the clicked color matches the target color
function checkColor() {
    if (colorBox.style.backgroundColor === targetColor) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }
}

// Function to stop the game
function stopGame() {
    clearInterval(gameInterval);
    startBtn.disabled = false;
    alert(`Game Over! Your score: ${score}`);
}

// Add event listener to start button
startBtn.addEventListener('click', startGame);
