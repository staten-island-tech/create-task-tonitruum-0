import mergeImages from 'merge-images';
import html2canvas from 'html2canvas';

export default function processImage(arr) {
  let canvas = document.querySelector('canvas');
  let context = canvas.getContext('2d');
  let srcArr = [];
  arr.forEach((x) => {
    srcArr.push(new sourceArray(x, x.xCoord, x.yCoord));
  });
  console.log(srcArr);
  mergeImages([srcArr]).then(
    (b64) => (document.querySelector('img').src = b64)
  );
}

class sourceArray {
  constructor(src, xC, yC) {
    this.src = src;
    this.x = xC;
    this.y = yC;
  }
}
