import { upperEngine, cafeteria } from "./selectors.js";
//Imports Tasks
import AlingEngineOutput from "./tasks/alingEngineOutput.js";
import Cafeteria from "./tasks/cafeteria.js";

const alingEngineOutput = new AlingEngineOutput();
const cafeteriaClass = new Cafeteria();

window.onload = () => {
  eventListener();
};

const eventListener = () => {
  upperEngine.addEventListener("click", () => alingEngineOutput.play());
  cafeteria.addEventListener("click", () => cafeteriaClass.play());
};
