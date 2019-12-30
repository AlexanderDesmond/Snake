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

// To control the snake's direction.
let direction = [1, 0];

// Handle each frame.
function updateLoop() {
  let tail = snake.pop();
  let head = snake[0];
  tail[0] = head[0] + direction[0];
  tail[1] = head[1] + direction[1];
  // Add last element of snake as the new first element of snake
  snake.unshift(tail);
  draw();
}

// Handle drawing of snake.
function draw() {
  CONTEXT.clearRect(0, 0, 600, 600);
  // Draw snake
  snake.forEach(([x, y]) => {
    CONTEXT.fillRect(x, y, 1, 1);
  });
}

// Run updateLoop() once every second.
setInterval(updateLoop, 1000);

document.body.onArrowKeyPress = function(e) {
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
  //console.log("UP KEY", e);
};
