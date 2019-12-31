// Get canvas and canvas context
const CANVAS = document.querySelector("canvas");
const CONTEXT = CANVAS.getContext("2d");

// Set canvas dimensions, border, and scale
CANVAS.width = 600;
CANVAS.height = 600;
CANVAS.style = "border: solid 1px black";
CONTEXT.scale(10, 10);
const BOARD_SIZE = CANVAS.width / 10;

// Set snake starting position
let snake = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 3],
  [1, 4]
];

// To control the snake's direction.
let direction = [1, 0];

// Set default apple position
apple = [8, 3];

// Handle each frame.
function updateLoop() {
  // Add last element of the snake as the new first element of the snake.
  snake.unshift([snake[0][0] + direction[0], snake[0][1] + direction[1]]);

  // When the snake eats an apple, generate another apple on the board.
  if (snake[0][0] === apple[0] && snake[0][1] === apple[1]) {
    apple = [generateRandomPosition(), generateRandomPosition()];
  } else {
    // If no apple was eaten, just remove the last element of the snake.
    snake.pop();
  }

  // If the snake eats itself or hits the edge of the board, restart the game.
  for (let i = 1; i < snake.length; i++) {
    if (
      (snake[0][0] === snake[i][0] && snake[0][1] === snake[i][1]) ||
      snake[0][0] < 0 ||
      snake[0][0] >= BOARD_SIZE ||
      snake[0][1] < 0 ||
      snake[0][1] >= BOARD_SIZE
    ) {
      // Reset snake position.
      snake = [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 3],
        [1, 4]
      ];
      // Reset sake direction.
      direction = [1, 0];
    }
  }

  draw();
}

// Handle drawing of snake.
function draw() {
  // Clear game board
  CONTEXT.clearRect(0, 0, 600, 600);

  // Draw apple
  CONTEXT.fillStyle = "red";
  CONTEXT.fillRect(apple[0], apple[1], 1, 1);

  // Draw snake
  CONTEXT.fillStyle = "black";
  snake.forEach(([x, y]) => {
    CONTEXT.fillRect(x, y, 1, 1);
  });
}

// Run updateLoop() once every second.
setInterval(updateLoop, 1000);

// Change the direction of the snake when an arrow key is pressed.
document.body.onkeydown = function(e) {
  if (e.keyCode === 40) {
    // DOWN
    direction = [0, 1];
  } else if (e.keyCode === 38) {
    // UP
    direction = [0, -1];
  } else if (e.keyCode === 39) {
    //RIGHT
    direction = [1, 0];
  } else if (e.keyCode === 37) {
    // LEFT
    direction = [-1, 0];
  }
};

// Creates and returns a random number based on the board size.
function generateRandomPosition() {
  return Math.floor(Math.random() * BOARD_SIZE);
}
