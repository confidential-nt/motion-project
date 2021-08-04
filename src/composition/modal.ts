import { iModal } from "../interfaces/i-modal";
import { Media } from "../type/type";

class Modal implements iModal {
  private static modalContainer: HTMLDivElement | null;
  private static closeBtn: HTMLButtonElement | null;

  constructor() {}

  hideModal() {
    Modal.modalContainer?.classList.remove("show");
    Modal.closeBtn?.removeEventListener("click", this.hideModal.bind(this));
  }

  displayModal(media: Media) {
    Modal.modalContainer = document.querySelector(".modal-container");
    Modal.modalContainer?.classList.add("show");

    Modal.closeBtn = document.querySelector(".modal-close");
    Modal.closeBtn?.addEventListener("click", this.hideModal.bind(this));

    const textTop = document.querySelector(".input-text-top");
    const textBtm = document.querySelector(".input-text-btm");

    if (textTop === null || textBtm === null) {
      return;
    }

    textTop.textContent = "Title";
    switch (media) {
      case "image":
        textBtm.textContent = "URL";
        break;
      case "video":
        textBtm.textContent = "URL";
        break;
      case "note":
        textBtm.textContent = "Body";
        break;
      case "task":
        textBtm.textContent = "Body";
        break;
    }
  }
}

export default Modal;
