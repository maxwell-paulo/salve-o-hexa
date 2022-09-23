import { life } from "./Life.js";
import { countdownElement, brumar, startButtom, infos, dica } from "./Timer.js";
import { gamePageMusic } from "./Game-board.js";

export const losePage = document.getElementById("lose-page");
export const allPage = document.getElementById("all-page");
export const bonusPage = document.getElementById("brumar-page");
const credits = document.querySelector(".page-h2");
const losePageMusic = new Audio("../audios/lose-sound.mp3");
const winPageMusic = new Audio("../audios/victory-sound.mp3");
const brumarMusic = new Audio("../audios/brumar-song.mp3");

export function lose() {
  if (life === 0) {
    gamePageMusic.pause();
    losePage.style.display = "flex";
    allPage.style.display = "none";
    credits.style.display = "none";
    losePageMusic.volume = 0.3;
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
    credits.style.display = "none";
    winPageMusic.volume = 0.3;
    winPageMusic.play();
    winPageMusic.loop = true;
    winPageMusic.playbackRate = 1;
  }
}

export function brumarPage() {
  if (brumar.value === "brumar") {
    gamePageMusic.pause();
    bonusPage.style.display = "flex";
    allPage.style.display = "none";
    brumar.style.display = "none";
    startButtom.style.display = "none";
    infos.style.display = "none";
    credits.style.display = "none";
    dica.style.display = "none";
    brumarMusic.volume = 0.3;
    brumarMusic.play();
    brumarMusic.loop = true;
    brumarMusic.playbackRate = 1;
  }
}
