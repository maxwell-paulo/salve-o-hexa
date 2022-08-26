export let count = 0;
const startingMinutes = 1;
let time = startingMinutes * 60;
export const startButtom = document.getElementById("star-buttom");
export const countdownElement = document.getElementById("countdown");
let refreshIntervalId;
const infos = document.getElementById("infos");
export const gamePageMusic = new Audio("../audios/musica-inicio.mp3");

startButtom.addEventListener("click", () => {
  refreshIntervalId = setInterval(updateCowntdown, 1000);
  startButtom.style.display = "none";
  infos.style.display = "none";
  gamePageMusic.volume = 0.05;
  gamePageMusic.play();
  gamePageMusic.loop = true;
  gamePageMusic.playbackRate = 1;
  console.log("OLAAA");
});

export function updateCowntdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  if (time <= 0) {
    clearInterval(refreshIntervalId);
  }
  countdownElement.innerHTML = `0${minutes}:${seconds}`;
  time--;
  count += 1;
}
