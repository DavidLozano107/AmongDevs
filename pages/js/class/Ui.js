import { bg } from "../selectors";

export default class Ui {
  constructor() {}

  changeBg(img) {
    bg.src = "../../assets/";
  }

  backToBaseImg() {
    this.changeImage("main.png");
  }
}
