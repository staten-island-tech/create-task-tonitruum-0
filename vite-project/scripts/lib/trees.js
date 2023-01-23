import * as arr from './array.js';
import createInterface from './interfaceUtils.js';

export default function treeStart() {
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
