import { gameBoard, generateRandomBoardPosition } from "../Game-board.js";
import { getEnemyDirection } from "../input.js";
import { newEnemyPosiotion } from "./New-enemy.js";
import { finalEnemyPosition } from "./Final-enemy.js";

export const enemyElement = document.createElement("img");

// Enemy randon generation
export let enemyPosition = generateRandomPosition();
// Enemy movimentation
export function update() {
  const enemyDirection = getEnemyDirection();

  enemyPosition.y += enemyDirection.y;
  if (enemyPosition.y > 16) {
    enemyPosition = generateRandomPosition();
  }
  if (enemyPosition.x > 37) {
    enemyPosition = generateRandomPosition();
  }
}

// Enemy first generation
export function draw() {
  enemyElement.setAttribute("src", "./images/maria-chuteira.png");
  enemyElement.setAttribute("alt", "enemy img");
  enemyElement.classList.add("enemy");
  enemyElement.style.gridRowStart = enemyPosition.y;
  enemyElement.style.gridColumnStart = enemyPosition.x;

  gameBoard.appendChild(enemyElement);
}

function generateRandomPosition() {
  let enemyNewPosition = generateRandomBoardPosition();

  return enemyNewPosition;
}
