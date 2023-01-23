import selectors from './selectors';
import enableDrag from './drag.js';
import * as arr from './array.js';

let selectedLscape;

export default function createInterface({
  title,
  inputArr,
  contID,
  identifier,
  buttonExists,
  className,
}) {
  document.getElementById('title').innerHTML = title;
  selectors.title.style.opacity = '1';
  selectors.border.innerHTML += arr.html;

  inputArr.forEach((h, i) => {
    document.getElementById(contID).innerHTML += `<img class=${className} id="${
      (identifier, i)
    }" draggable="false" src=${h}>`;
  });
  document.getElementById('houseSelector').parentNode.append(selectedLscape);
  document.querySelectorAll('.lscape').forEach((l) => {
    l.classList.add('selectedLscape');
    l.removeEventListener('click', makeUI);
    l.style.opacity = '1';
    l.style.removeProperty('transition');
    l.style.removeProperty('opacity');
    l.style.scale = '3';
  });

  if (buttonExists) {
    document
      .querySelector('.selectedLscape')
      .insertAdjacentHTML('afterend', `<button id="button">test</button>`);
    document
      .querySelector('.selectedLscape')
      .insertAdjacentHTML('afterend', `<button id="button1">print</button>`);
  }
  enableDrag();
}

export function parallax(e) {
  const hoveredImg = e.currentTarget;
  hoveredImg.style.scale = 1.5;
  hoveredImg.style.transition = '.1s ease';
}

export function unhoverImg(e) {
  // renamed undo to unhoverImg
  const hoveredImg = e.currentTarget;
  hoveredImg.style.removeProperty('scale');
}

export function makeUI(e) {
  selectedLscape = e.currentTarget;
  const selectedImg = e.currentTarget;
  selectedImg.removeEventListener('mouseenter', parallax);
  selectedImg.removeEventListener('mouseleave', unhoverImg);
  selectedImg.style.transition = '.5s ease';
  document.querySelectorAll('.lscape').forEach((l) => {
    l.removeEventListener('mouseenter', parallax);
    l.removeEventListener('mouseleave', unhoverImg);
    l.style.opacity = '0';
    l.style.transition = '.5s ease';
    l.addEventListener('transitionend', clearInitialUI);
  });
  selectors.title.style.opacity = '0';
  selectors.title.style.transition = '.5s ease';
}

let y = 0;
function clearInitialUI(e) {
  y++;
  console.log('removinanna');
  e.currentTarget.remove();
  if (y === 6) {
    createInterface({
      title: 'Select a house',
      inputArr: arr.houses,
      contID: 'houseSelector',
      identifier: 'hs',
      buttonExists: true,
      className: 'houses',
    });
  }
}