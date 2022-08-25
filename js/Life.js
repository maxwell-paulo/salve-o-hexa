import { characterPosition } from "./character.js";
import { enemyPosition } from "./Enemies/enemy.js";
import { newEnemyPosiotion } from "./Enemies/New-enemy.js";
import { finalEnemyPosition } from "./Enemies/Final-enemy.js";

export let life = 2;
const life1 = document.getElementById("life-icon-1");
const life2 = document.getElementById("life-icon-2");

export function lifeCounter() {
  if (
    (characterPosition.x === enemyPosition.x && enemyPosition.y >= 14) ||
    (characterPosition.x === newEnemyPosiotion.x &&
      newEnemyPosiotion.y >= 14) ||
    (characterPosition.x === finalEnemyPosition.x && finalEnemyPosition.y >= 14)
  ) {
    life -= 1;
  }
  if (life === 1) {
    life1.style.display = "none";
  }
  if (life === 0) {
    life2.style.display = "none";
  }
}
