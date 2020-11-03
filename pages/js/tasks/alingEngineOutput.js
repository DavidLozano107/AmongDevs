import UI from "../class/Ui.js";
import { containerFluid } from "../selectors.js";
const ui = new UI();

export default class AlingEngineOutput {
  constructor() {}

  construirModal() {
    if (document.querySelector(".divModal")) {
      var modal = document.getElementById("tvesModal");
      var divModal = document.getElementById("btnModal");
      var span = document.getElementById("closeModal");
      var body = document.getElementsByTagName("body")[0];

      divModal.onclick = function () {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
          body.style.position = "inherit";
          body.style.height = "auto";
          body.style.overflow = "visible";
        }
      };
    }
  }

  construirHtml() {
    const div = document.createElement("div");
    div.classList.add("divModal");
    const html = ` 
    
    <div id="tvesModal" class="modalContainer">
      <div class="modal-content">

        <h2>Modal</h2>
        <p>Para salir de la tarea dale click afuera!</p>
      </div>
    </div>
    `;
    div.id = "btnModal";
    containerFluid.appendChild(div);
    div.innerHTML = html;
    this.construirModal();
  }

  play() {
    ui.changeBg("topEngine.png");
    this.construirHtml();

    console.log("Jugando");
  }
}
