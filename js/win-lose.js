import { life } from "./Life.js";
import { countdownElement } from "./Timer.js";
import { gamePageMusic } from "./Timer.js";

export const losePage = document.getElementById("lose-page");
export const allPage = document.getElementById("all-page");
const losePageMusic = new Audio("../../audios/musica-inicio.mp3");
const winPageMusic = new Audio("../../audios/musica-inicio.mp3");

export function lose() {
  if (life === 0) {
    gamePageMusic.pause();
    losePage.style.display = "flex";
    allPage.style.display = "none";
    losePageMusic.volume = 0.05;
    losePageMusic.play();
    losePageMusic.loop = true;
    losePageMusic.playbackRate = 1;
  }
}

export const winPage = document.getElementById("win-page");
export function win() {
  if (countdownElement.innerHTML === "00:00") {
    gamePageMusic.pause();
    winPage.style.display = "flex";
    allPage.style.display = "none";
    winPageMusic.volume = 0.05;
    winPageMusic.play();
    winPageMusic.loop = true;
    winPageMusic.playbackRate = 1;
  }
}
