import { getInputDirection } from "./input.js";
import { gameBoard } from "./Game-board.js";

export const characterElement = document.createElement("img");
characterElement.setAttribute("src", "./images/neymar-right.png");

// Character initial position
export const characterPosition = { x: 20, y: 16 };

// Character movimentation
export function update() {
  const inputDirection = getInputDirection();

  characterPosition.x += inputDirection.x;
  if (characterPosition.x <= 1) {
    inputDirection.x = 1;
  }
  if (characterPosition.x > 37) {
    inputDirection.x = -1;
  }
  characterPosition.y += inputDirection.y;
}

// character generation
export function draw() {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 65 || event.keyCode === 37) {
      characterElement.setAttribute("src", "./images/neymar.png");
    } else if (event.keyCode === 68 || event.keyCode === 39) {
      characterElement.setAttribute("src", "./images/neymar-right.png");
    }
  });

  characterElement.setAttribute("alt", "neymar img");
  characterElement.classList.add("neymar");

  characterElement.style.gridRowStart = characterPosition.y;
  characterElement.style.gridColumnStart = characterPosition.x;

  gameBoard.appendChild(characterElement);
}
