import * as tree from './trees.js';
let container;
let dragItemArr;
let dragItem;
let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;
let usedEl = [];
let currentEl;
let box;

export function eventListeners() {
  container = document.getElementById('houseSelector');
  dragItemArr = document.querySelectorAll('.houses');
  container.addEventListener('mousedown', dragStart, false);
  container.addEventListener('mouseup', dragEnd, false);
  container.addEventListener('mousemove', drag, false);
  document
    .getElementById('button')
    .addEventListener('click', ihave800millionpower);
  box = document.querySelector('.selectedLscape').getBoundingClientRect();
}

function dragStart(e) {
  currentEl = e.target;
  let seen = false;
  for (const u of usedEl) {
    if (currentEl === u.element) {
      xOffset = u.xOffset;
      yOffset = u.yOffset;
      seen = true;
    }
  }
  if (!seen) {
    xOffset = 0;
    yOffset = 0;
  }
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  dragItemArr.forEach((d) => {
    if (currentEl === d) {
      dragItem = currentEl;
      active = true;
    }
  });
}

function drag(e) {
  if (active) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    xOffset = currentX;
    yOffset = currentY;
    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
}

function dragEnd() {
  if (active) {
    console.log(usedEl);
    let house = currentEl.getBoundingClientRect();
    //Right2 < Right1 && Left2 > Left1 && Top2 > Top1 && Bottom2 < Bottom1
    // house 1 box 2
    if (
      box.right > house.right &&
      box.left < house.left &&
      box.top < house.top &&
      box.bottom > house.bottom
    ) {
      let seen = false;
      usedEl.forEach((h) => {
        if (h.element === currentEl) {
          //console.log(h.element, currentEl);
          //console.log(usedEl);
          h.xOffset = xOffset;
          h.yOffset = yOffset;
          seen = true;
        }
      });

      if (!seen) {
        usedEl.push(new Used(currentEl, xOffset, yOffset));
      }

      initialX = 0;
      initialY = 0;
    } else {
      currentEl.style.removeProperty('transform');
      for (let i = 0; i < usedEl.length; i++) {
        if (usedEl[i].element === currentEl) {
          usedEl.splice(i, 1);
        }
      }
    }

    active = false;
  }
}

function Used(el, xOf, yOf) {
  this.element = el;
  this.xOffset = xOf;
  this.yOffset = yOf;
}

function ihave800millionpower() {
  dragItemArr.forEach((i) => {
    let used = false;
    i.used = used;
    for (const k in usedEl) {
      if (usedEl[k].element.id === i.id) {
        used = true;
        i.used = used;
        break;
      }
    }
  });
  let mergeArr = [];
  dragItemArr.forEach((p) => {
    if (p.used === true) {
      mergeArr.push(p);
    }
  });
  mergeArr.forEach((m) => {
    m.xCoord = m.getBoundingClientRect().left;
    m.yCoord = m.getBoundingClientRect().top;
  });
  dragItemArr.forEach((k) => {
    k.remove();
  });
  dragItemArr = null;
  tree.treeStart();
}
