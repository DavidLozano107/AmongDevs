import UI from "../class/Ui.js";
import { containerFluid } from "../selectors.js";
const ui = new UI();

export default class Cafeteria {
  constructor() {}

  construirHtml() {
    const div = document.createElement("div");
    div.classList.add("divModal");
    const html = ` 
    <div id="divModal">Abrir modal</div>
    <div id="tvesModal" class="modalContainer">
      <div class="modal-content">
        <span class="close">×</span>
        <h2>Modal</h2>
        <p>Se ha desplegado el modal y bloqueado el scroll del body!</p>
      </div>
    </div>
    `;

    containerFluid.appendChild(div);
  }

  construirModal() {
    if (document.getElementById("btnModal")) {
      var modal = document.getElementById("tvesModal");
      var btn = document.getElementById("btnModal");
      var span = document.getElementsByClassName("close")[0];
      var body = document.getElementsByTagName("body")[0];

      btn.onclick = function () {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
      };

      span.onclick = function () {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
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
  play() {
    ui.changeBg("cafeteria.png");
    this.construirHtml();
    console.log("Jugando");
  }
}
