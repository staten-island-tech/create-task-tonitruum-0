import * as arr from "./array.js";
import * as drag from "./drag.js";
import * as bruh from "./linearalgeBRUH.js";
import "../styles.css";

let selectors = {
  container: document.getElementById("container"),
  border: document.getElementById("border"),
  title: document.getElementById("title"),
};
let i = 0;
let selectedLscape = "";
arr.landscapes.forEach((l) => {
  i++;
  selectors.container.innerHTML += `<img class="lscape" id='mtn${i}' src="${l}" draggable="false">`;
});

document.querySelectorAll(".lscape").forEach((l) => {
  l.addEventListener("mouseenter", parallax);
  l.addEventListener("mouseleave", undo);
  l.addEventListener("click", makeUI);
});

function parallax() {
  let e = event.currentTarget;
  e.style.scale = 1.5;
  e.style.transition = ".1s ease";
}

function undo() {
  let e = event.currentTarget;
  e.style.removeProperty("scale");
}

function makeUI() {
  //e.style.scale = 2;
  let e = (selectedLscape = event.currentTarget);
  e.removeEventListener("mouseenter", parallax);
  e.removeEventListener("mouseleave", undo);
  e.style.transition = ".5s ease";
  document.querySelectorAll(".lscape").forEach((l) => {
    l.removeEventListener("mouseenter", parallax);
    l.removeEventListener("mouseleave", undo);
    l.style.opacity = "0";
    l.style.transition = ".5s ease";
    l.addEventListener("transitionend", remove);
  });

  selectors.title.style.opacity = "0";
  selectors.title.style.transition = ".5s ease";
}
let y = 0;
function remove() {
  y++;
  event.currentTarget.remove();
  if (y === 6) {
    create();
  }
}

function create() {
  document.getElementById("title").innerHTML = "Select a house";
  selectors.title.style.opacity = "1";
  selectors.border.innerHTML += arr.html;
  let i = 0;
  arr.houses.forEach((h) => {
    i++;
    document.getElementById(
      "houseSelector"
    ).innerHTML += `<img class="houses" id="hs${i}" draggable="false" src=${h}>`;
  });
  document.getElementById("houseSelector").parentNode.append(selectedLscape);
  document.querySelectorAll(".lscape").forEach((l) => {
    l.classList.add("selectedLscape");
    l.removeEventListener("click", makeUI);
    l.style.opacity = "1";
    l.style.removeProperty("transition");
    l.style.removeProperty("opacity");
    l.style.scale = "3";
  });

  document
    .querySelector(".selectedLscape")
    .insertAdjacentHTML("afterend", `<button id="button">test</button>`);
  document
    .querySelector(".selectedLscape")
    .insertAdjacentHTML("afterend", `<button id="button1">print</button>`);
  drag.eventListeners();
}
