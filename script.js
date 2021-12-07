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
let controls = document.addEventListener("keydown", gameControls);

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

function gameControls(event) {
  if (event.key == "a" && direction != "right") direction = "left";
  if (event.key == "d" && direction != "left") direction = "right";
  if (event.key == "w" && direction != "down") direction = "up";
  if (event.key == "s" && direction != "up") direction = "down";
}

function snakeMove() {
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "right") snakeX += box;
  else if (direction === "left") snakeX -= box;
  else if (direction === "up") snakeY -= box;
  else if (direction === "down") snakeY += box;

  snake.pop();

  let move = {
    x: snakeX,
    y: snakeY,
  };
  snake.unshift(move);
}

function comebackScreen() {
  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
}

function startGame() {
  comebackScreen();
  createBG();
  createSnake();
  snakeMove();
}
