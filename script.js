let canvas = document.getElementById("snake-game");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

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

createBG();
createSnake();
