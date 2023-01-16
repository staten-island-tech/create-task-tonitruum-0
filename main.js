import * as arr from './array.js'

let selectors = {
    container: document.getElementById('container'),
}
let i = 0;
arr.landscapes.forEach(l => {
    i++;
    selectors.container.innerHTML += `<img class="lscape" id='mtn${i}' src="${l}">`;
    console.log(selectors.container);
});
