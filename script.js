let canvas = document.getElementById("snake-game");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "right";
let start = setInterval(startGame, 100);

function createBG() {
  context.fillStyle = "burlywood";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
  snake.forEach((position) => {
    context.fillStyle = "green";
    context.fillRect(position.x, position.y, box, box);
  });
}

function gameControls() {
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "right") snakeX += box;
  else if (direction === "left") snakeX -= box;
  else if (direction === "up") snakeY -= box;
  else if (direction === "down") snakeY += box;

  snake.pop();

  let snakeMove = {
    x: snakeX,
    y: snakeY,
  };
  snake.unshift(snakeMove);
}

function startGame() {
  createBG();
  createSnake();

  gameControls();
}
