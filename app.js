// Get canvas and canvas context
const CANVAS = document.querySelector("canvas");
const CONTEXT = CANVAS.getContext("2d");

// Set canvas dimensions, border, and scale
CANVAS.width = 600;
CANVAS.height = 600;
CANVAS.style = "border: solid 1px black";
CONTEXT.scale(10, 10);

// Set snake starting position
let snake = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 3],
  [1, 4]
];

// Keep track of keys pressed
let keyboardState = [0, 0];

function updateLoop() {}

function draw() {
  CONTEXT.clearRect(0, 0, 600, 600);
  // Draw snake
  snake.forEach(([x, y]) => {
    CONTEXT.fillRect(x, y, 1, 1);
  });
}

draw();

// Remove last element of snake
keyboardState = [0, -1];
let tail = snake.pop();
let head = snake[0];
tail[0] = head[0] + keyboardState[0];
tail[1] = head[1] + keyboardState[1];
// Add last element of snake as the new first element of snake
snake.unshift(tail);
draw();
