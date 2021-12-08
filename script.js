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

function snakeMove(snakeX, snakeY) {
  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  eatFood(snakeX, snakeY);

  let move = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(move);
}

function gameOver(posX, posY) {
  for (let i = 1; i < snake.length; i++) {
    if (posX == snake[i].x && posY == snake[i].y) {
      clearInterval(start);
      alert("GAME OVER!");
    }
  }
}

function comebackScreen() {
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (snakeX > 15 * box && direction == "right") snakeX = 0;
  if (snakeX < 0 && direction == "left") snakeX = 16 * box;
  if (snakeY > 15 * box && direction == "down") snakeY = 0;
  if (snakeY < 0 && direction == "up") snakeY = 16 * box;

  gameOver(snakeX, snakeY);
  snakeMove(snakeX, snakeY);
}

function startGame() {
  createBG();
  createElement(snake, "green");
  createElement(food, "red");
  comebackScreen();
}
