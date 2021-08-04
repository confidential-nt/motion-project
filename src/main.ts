import Modal from "./composition/modal";
import Image from "./composition/image";
import Video from "./composition/video";
import Note from "./composition/note";
import Task from "./composition/task";
import { Iimage } from "./interfaces/i-image";
import { iModal } from "./interfaces/i-modal";

class App {
  private static buttons: NodeListOf<HTMLButtonElement> | undefined;

  constructor(private Modal: iModal) {
    App.buttons = document.querySelectorAll(".nav-btn");
  }

  run() {
    this.handleBtnClickEvent();
  }

  private handleBtnClickEvent() {
    App.buttons?.forEach((btn) =>
      btn.addEventListener("click", this.handleModal.bind(this))
    );
  }

  private handleModal(e) {
    const { func } = e.target.dataset;

    this.Modal.displayModal(func);
  }
}

const modal = new Modal();
const app = new App(modal);

app.run();
