const boardWidth = 40;

export const gameBoard = document.getElementById("game-board");

export function generateRandomBoardPosition() {
  return {
    x: Math.floor(Math.random() * boardWidth) + 1,
    y: 1,
  };
}
