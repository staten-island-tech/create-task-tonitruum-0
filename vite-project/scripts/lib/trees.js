import * as arr from './array.js';
import createInterface from './interfaceUtils.js';

let ran = false;
export default function treeStart() {
  if (!ran) {
    document.getElementById('houseSelector').id = 'treeSelector';
    createInterface({
      title: 'Select trees',
      inputArr: arr.trees,
      contID: 'treeSelector',
      identifier: 'tr',
      buttonExists: false,
      className: 'trees',
    });
  }

  ran = true;
}
