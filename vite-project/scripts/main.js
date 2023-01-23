import * as arr from './lib/array.js';
import selectors from './lib/selectors.js';
import { parallax, unhoverImg, makeUI } from './lib/interfaceUtils.js';
import '../styles.css';

console.log('ay');

// let i = 0; use index passed by forEach method instead
arr.landscapes.forEach((l, i) => {
  // i++;
  console.log('called', l, i, 'called');
  selectors.container.innerHTML += `<img class="lscape" id='mtn${i}' src="${l}" draggable="false">`;
});

document.querySelectorAll('.lscape').forEach((l) => {
  l.addEventListener('mouseenter', parallax);
  l.addEventListener('mouseleave', unhoverImg);
  l.addEventListener('click', makeUI);
});
