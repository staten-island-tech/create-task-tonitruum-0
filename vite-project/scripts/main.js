import * as arr from "./lib/array.js";
import selectors from "./lib/selectors.js";
import { parallax, unhoverImg, makeUI } from "./lib/interfaceUtils.js";
import "../styles.css";

arr.landscapes.forEach((l, i) => {
  selectors.container.innerHTML += `<img class="lscape" id='mtn${i}' src="${l}" draggable="false">`;
});

document.querySelectorAll(".lscape").forEach((l) => {
  l.addEventListener("mouseenter", parallax);
  l.addEventListener("mouseleave", unhoverImg);
  l.addEventListener("click", makeUI);
});
