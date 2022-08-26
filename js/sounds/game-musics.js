import { allPage, losePage, winPage } from "../win-lose.js";
const gameMusic = new Audio("../../audios/musica-inicio.mp3");
const losePageMusic = new Audio("../../audios/musica-inicio.mp3");
const winPageMusic = new Audio("../../audios/musica-inicio.mp3");

export function musics() {
  if (allPage.style.display === "flex") {
    gameMusic.volume = 0.05;
    gameMusic.play();
    gameMusic.loop = true;
    gameMusic.playbackRate = 1;
  }
  if (losePage.style.display === "flex") {
    losePageMusic.volume = 0.05;
    losePageMusic.play();
    losePageMusic.loop = true;
    losePageMusic.playbackRate = 1;
  }
  if (winPage.style.display === "flex") {
    winPageMusic.volume = 0.05;
    winPageMusic.play();
    winPageMusic.loop = true;
    winPageMusic.playbackRate = 1;
  }
}
