import _ from "lodash";
// import * as utils from "./utils";
// import { squared, NAME } from "./utils";
// import { squared, NAME as NAME_OF_HAM } from "./utils";
// import Lion from "./utils";
// import Tiger from "./utils"; // defaultでexportしたものはimportする際は自由に名前を付けられる
import "./style.css";
import "./style.scss";
import logo from "./logo.png";

// console.log(squared(4), NAME);
// console.log(utils.squared(4), utils.NAME);
// console.log(squared(4), NAME_OF_HAM);
// console.log(Lion.say());

function component() {
  const element = document.createElement("div");
  const array = ["hello", "webpack", "!!"];
  element.innerHTML = _.join(array, " ");
  return element;
}

document.body.appendChild(component());
document.body.classList.add("haikei");

const image = new Image();
image.src = logo;
document.body.appendChild(image);
