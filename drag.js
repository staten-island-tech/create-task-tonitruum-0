let container;
let dragItem;
let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

export function eventListeners () {
  container = document.getElementById("houseSelector");
  dragItem = document.querySelectorAll("houses");
  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);
}

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  dragItem.forEach((d) => {
    console.log(d);
    if (d.target === dragItem) {
      active = true;
    }
  })
}

if (active === true){
  alert("true");
}

function dragEnd(e){

}

function drag(e){
  
}