let canvas = document.getElementById("snake-game");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let food = [];
food[0] = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};
let direction = "right";
let start = setInterval(startGame, 100);
let controls = document.addEventListener("keydown", gameControls);

function createBG() {
  context.fillStyle = "burlywood";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createElement(element, color) {
  element.forEach((position) => {
    context.fillStyle = color;
    context.fillRect(position.x, position.y, box, box);
  });
}

function gameControls(event) {
  if (event.key == "a" && direction != "right") direction = "left";
  if (event.key == "d" && direction != "left") direction = "right";
  if (event.key == "w" && direction != "down") direction = "up";
  if (event.key == "s" && direction != "up") direction = "down";
}

function eatFood(posX, posY) {
  if (posX != food[0].x || posY != food[0].y) {
    snake.pop();
  } else {
    food[0].x = Math.floor(Math.random() * 15 + 1) * box;
    food[0].y = Math.floor(Math.random() * 15 + 1) * box;
  }
}

function snakeMove() {
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "right") snakeX += box;
  if (direction === "left") snakeX -= box;
  if (direction === "up") snakeY -= box;
  if (direction === "down") snakeY += box;

  eatFood(snakeX, snakeY);

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
  createElement(snake, "green");
  createElement(food, "red");
  snakeMove();
}
