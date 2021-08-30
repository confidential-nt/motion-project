import { Iimage } from "../interfaces/i-image";
import { iModal } from "../interfaces/i-modal";
import { Media } from "../type/type";

class Modal implements iModal {
  private static modalContainer: HTMLDivElement | null;
  private static closeBtn: HTMLButtonElement | null;

  constructor(private Image: Iimage) {}

  hideModal() {
    Modal.modalContainer?.classList.remove("show");
    Modal.closeBtn?.removeEventListener("click", this.hideModal.bind(this));
  }

  displayModal(media: Media) {
    Modal.modalContainer = document.querySelector(".modal-container");
    Modal.modalContainer?.classList.add("show");

    Modal.closeBtn = document.querySelector(".modal-close");
    Modal.closeBtn?.addEventListener("click", this.hideModal.bind(this));

    const inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".modal-input input");

    inputs.forEach((input) => (input.value = ""));

    const textTop = document.querySelector(".input-text-top");
    const textBtm = document.querySelector(".input-text-btm");

    if (textTop === null || textBtm === null) {
      return;
    }

    textTop.textContent = "Title";
    inputs[0].setAttribute("name", "title");
    switch (media) {
      case "image":
        textBtm.textContent = "URL";
        inputs[1].setAttribute("name", "url");
        this.Image.run();
        break;
      case "video":
        textBtm.textContent = "URL";
        inputs[1].setAttribute("name", "url");
        break;
      case "note":
        textBtm.textContent = "Body";
        inputs[1].setAttribute("name", "body");
        break;
      case "task":
        textBtm.textContent = "Body";
        inputs[1].setAttribute("name", "body");
        break;
    }
  }
}

export default Modal;
