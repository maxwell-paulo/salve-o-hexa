import { gameBoard, generateRandomBoardPosition } from "../Game-board.js";
import { getEnemyDirection } from "../input.js";
import { enemyPosition } from "./enemy.js";
import { newEnemyPosiotion } from "./New-enemy.js";

// Enemy randon generation
export let finalEnemyPosition = generateNewRandomPosition();

// Enemy movimentation
export function update() {
  const finalEnemyDireticon = getEnemyDirection();

  finalEnemyPosition.y += finalEnemyDireticon.y;
  if (finalEnemyPosition.y > 16) {
    finalEnemyPosition = generateNewRandomPosition();
  }
  if (finalEnemyPosition.x > 37) {
    finalEnemyPosition = generateNewRandomPosition();
  }
  if (
    finalEnemyPosition.x === enemyPosition.x ||
    finalEnemyPosition.x === newEnemyPosiotion.x
  ) {
    finalEnemyPosition = generateNewRandomPosition();
  }
}

// Enemy first generation
export function draw() {
  const finalEnemyElement = document.createElement("img");
  finalEnemyElement.setAttribute("src", "../../images/mbappe.png");
  finalEnemyElement.setAttribute("alt", "final enemy element");
  finalEnemyElement.classList.add("new-enemy");
  finalEnemyElement.style.gridRowStart = finalEnemyPosition.y;
  finalEnemyElement.style.gridColumnStart = finalEnemyPosition.x;

  gameBoard.appendChild(finalEnemyElement);
}

function generateNewRandomPosition() {
  let finalEnemyNewPosition = generateRandomBoardPosition();

  return finalEnemyNewPosition;
}
