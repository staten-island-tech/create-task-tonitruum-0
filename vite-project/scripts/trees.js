import * as arr from "./array.js";

export function treeStart() {
  document.getElementById("houseSelector").id = "treeSelector";
  create("Select trees", arr.trees, "treeSelector", "tr", false, "trees");
}
