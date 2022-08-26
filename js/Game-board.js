const boardWidth = 40;

export const gameBoard = document.getElementById("game-board");

export const gamePageMusic = new Audio("../audios/game-music.mp3");

export function generateRandomBoardPosition() {
  gamePageMusic.volume = 0.1;
  gamePageMusic.play();
  gamePageMusic.loop = true;
  gamePageMusic.playbackRate = 1;
  return {
    x: Math.floor(Math.random() * boardWidth) + 1,
    y: 1,
  };
}
