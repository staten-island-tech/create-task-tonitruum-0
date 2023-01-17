import * as arr from "./array.js";

let selectors = {
  container: document.getElementById("container"),
};
let i = 0;
arr.landscapes.forEach((l) => {
  i++;
  selectors.container.innerHTML += `<img class="lscape" id='mtn${i}' src="${l}">`;
});

document.querySelectorAll(".lscape").forEach((l) => {
  l.addEventListener("mouseenter", parallax);
});

function parallax() {
  console.log("test");
}
