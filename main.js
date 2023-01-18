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
  l.addEventListener("mouseleave", undo);
  l.addEventListener("click", makeUI);
});

function parallax() {
    let e = event.currentTarget;
    e.style.scale = 1.5;
    e.style.transition=".1s ease";
}

function undo() {
    let e = event.currentTarget;
    e.style.removeProperty("scale");
}

function makeUI() {
    
}