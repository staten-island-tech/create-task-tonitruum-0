import * as arr from './array.js';
import createInterface from './interfaceUtils.js';
import processImage from './imageProcessing.js';

let ran = false;
let placedItemArr = [];

export default function treeStart(mergedArr) {
  if (!ran) {
    placedItemArr.push(document.querySelector('.selectedLscape'));
    placedItemArr[0].xCoord = placedItemArr[0].getBoundingClientRect().left;
    placedItemArr[0].yCoord = placedItemArr[0].getBoundingClientRect().top;
    mergedArr.forEach((x) => {
      placedItemArr.push(x);
    });
    document.getElementById('houseSelector').id = 'treeSelector';
    createInterface({
      title: 'Select trees',
      inputArr: arr.trees,
      contID: 'treeSelector',
      identifier: 'tr',
      buttonExists: false,
      className: 'trees',
    });
  } else {
    mergedArr.forEach((x) => {
      placedItemArr.push(x);
    });
    processImage(placedItemArr);
  }

  ran = true;
}
