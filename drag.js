let container = document.getElementById("container");
let dragItem = document.querySelectorAll("houses");

let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

selectors.container.addEventListener("mousedown", dragStart, false);
selectors.container.addEventListener("mouseup", dragEnd, false);
selectors.container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === dragItem) {
    active = true;
  }
}
