import * as arr from "./array.js";
import createInterface from "./interfaceUtils.js";
import html2canvas from "html2canvas";
import selectors from "./selectors.js";

let ran = false;
export default function treeStart() {
  if (!ran) {
    document.getElementById("houseSelector").id = "treeSelector";
    createInterface({
      title: "Select trees",
      inputArr: arr.trees,
      contID: "treeSelector",
      identifier: "tr",
      buttonExists: false,
      className: "trees",
    });
  } else {
    test();
  }
  ran = true;
}

function test() {
  document.getElementById("button").remove();
  document.getElementById("title").remove();
  html2canvas(document.body).then(function (canvas) {
    canvas.id = "canvasID";
    document.body.appendChild(canvas);
  });
  document.getElementById("merge").remove();
  console.log(document.querySelector("canvasID"));
}
