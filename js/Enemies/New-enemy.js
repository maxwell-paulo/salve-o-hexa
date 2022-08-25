import { gameBoard, generateRandomBoardPosition } from "../Game-board.js";
import { getEnemyDirection } from "../input.js";
import { enemyPosition } from "./enemy.js";
import { finalEnemyPosition } from "./Final-enemy.js";

// Enemy randon generation
export let newEnemyPosiotion = generateNewRandomPosition();

// Enemy movimentation
export function update() {
  const newEnemyDirection = getEnemyDirection();

  newEnemyPosiotion.y += newEnemyDirection.y;
  if (newEnemyPosiotion.y > 16) {
    newEnemyPosiotion = generateNewRandomPosition();
  }
  if (newEnemyPosiotion.x > 37) {
    newEnemyPosiotion = generateNewRandomPosition();
  }
  if (newEnemyPosiotion.x === enemyPosition.x) {
    newEnemyPosiotion = generateNewRandomPosition();
  }
}

// Enemy first generation
export function draw() {
  const newEnemyElement = document.createElement("img");
  newEnemyElement.setAttribute("src", "../../images/argentino.png");
  newEnemyElement.setAttribute("alt", "new enemy element");
  newEnemyElement.classList.add("new-enemy");
  newEnemyElement.style.gridRowStart = newEnemyPosiotion.y;
  newEnemyElement.style.gridColumnStart = newEnemyPosiotion.x;

  gameBoard.appendChild(newEnemyElement);
}

function generateNewRandomPosition() {
  let newEnemyNewPosition = generateRandomBoardPosition();

  return newEnemyNewPosition;
}
