import { startButtom } from "./Timer.js";

let inputDirection = {
  x: 0,
  y: 0,
};

let enemyDirection = {
  x: 0,
  y: 0,
};

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      inputDirection.x = -1;
      inputDirection.y = 0;
      break;
    case "ArrowRight":
      inputDirection.x = 1;
      inputDirection.y = 0;
      break;
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
