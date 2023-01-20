import * as main from './main.js';
import * as arr from './array.js';

export function treeStart() {
  document.getElementById('houseSelector').id = 'treeSelector';
  main.create('Select trees', arr.trees, 'treeSelector', 'tr', false);
}
