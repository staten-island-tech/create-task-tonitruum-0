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
  html2canvas(document.body).then(function (canvas) {
    document.body.appendChild(canvas);
  });
}
