import {
  draw as characterDraw,
  update as characterUpdate,
  characterPosition,
  characterElement,
} from "./character.js";

import { gameBoard } from "./Game-board.js";

import {
  draw as enemyDraw,
  update as enemyUpdate,
  enemyPosition,
  enemyElement,
} from "./Enemies/enemy.js";

import {
  draw as newEnemyDraw,
  update as newEnemyUpdate,
  newEnemyPosiotion,
} from "./Enemies/New-enemy.js";

import { count, updateCowntdown } from "./Timer.js";

import {
  draw as finalEnemyDraw,
  update as finalEnemyUpdate,
  finalEnemyPosition,
} from "./Enemies/Final-enemy.js";

import { lifeCounter, life } from "./Life.js";

import { lose, losePage, win, winPage, brumarPage } from "./win-lose.js";

let gameSpeed = 7;

export let lastTimeRender = 0;

let gameOver = false;

function main(currentTime) {
  if (losePage.style.display === "flex" || winPage.style.display === "flex") {
    return;
  }

  window.requestAnimationFrame(main);

  const secondSinceLastRender = (currentTime - lastTimeRender) / 1000;

  if (secondSinceLastRender < 1 / gameSpeed) return;

  lastTimeRender = currentTime;

  update();

  draw();

  if (count > 20) {
    gameSpeed = 10;
  }

  if (count > 30) {
    gameSpeed = 15;
  }

  if (count > 40) {
    gameSpeed = 20;
  }

  if (count > 50) {
    gameSpeed = 25;
  }

  lifeCounter();

  lose();

  win();

  brumarPage();
}

function update() {
  gameBoard.innerHTML = "";
  characterUpdate();
  enemyUpdate();
  newEnemyUpdate();
  finalEnemyUpdate();
}

function draw() {
  characterDraw();
  if (count != 0) {
    enemyDraw();
  }
  if (count > 5) {
    newEnemyDraw();
  }
  if (count > 15) {
    finalEnemyDraw();
  }
}

window.requestAnimationFrame(main);
