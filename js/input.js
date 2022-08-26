import { startButtom } from "./Timer.js";

let inputDirection = {
  x: 0,
  y: 0,
};

let enemyDirection = {
  x: 0,
  y: 0,
};

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 65 || event.keyCode === 37) {
    inputDirection.x = -1;
    inputDirection.y = 0;
  } else if (event.keyCode === 68 || event.keyCode === 39) {
    inputDirection.x = 1;
    inputDirection.y = 0;
  }
});

startButtom.addEventListener("click", () => {
  inputDirection.x = 1;
  inputDirection.y = 0;
});

export function getInputDirection() {
  return inputDirection;
}
startButtom.addEventListener("click", () => {
  enemyDirection.x = 0;
  enemyDirection.y = 1;
});

export function getEnemyDirection() {
  return enemyDirection;
}
