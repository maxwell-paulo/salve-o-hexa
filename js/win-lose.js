import { life } from "./Life.js";
import { countdownElement } from "./Timer.js";
export const losePage = document.getElementById("lose-page");
const allPage = document.getElementById("all-page");
export function lose() {
  if (life === 0) {
    losePage.style.display = "flex";
    allPage.style.display = "none";
  }
}

export const winPage = document.getElementById("win-page");
export function win() {
  if (countdownElement.innerHTML === "00:00") {
    winPage.style.display = "flex";
    allPage.style.display = "none";
  }
}
