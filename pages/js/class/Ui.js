import { bg, selectors } from "../selectors.js";

export default class Ui {
  constructor() {
    console.log(bg.style);
  }

  changeBg(img) {
    selectors.remove();
    bg.style.backgroundImage = "url(" + `assets/${img}` + ")";
  }

  backToBaseImg() {
    this.changeImage("main.png");
  }
}
