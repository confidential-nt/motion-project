import Modal from "./composition/modal";
import Image from "./composition/image";
import Video from "./composition/video";
import Note from "./composition/note";
import Task from "./composition/task";

import { iModal } from "./interfaces/i-modal";

class App {
  private static buttons: NodeListOf<HTMLButtonElement> | undefined;

  constructor(private Modal: iModal) {
    App.buttons = document.querySelectorAll(".nav-btn");
  }

  run() {
    this.handleBtnClickEvent();
    this.drawItem();
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

  private drawItem() {
    const images = JSON.parse(localStorage.getItem("IMAGE"));

    const itemContainer = document.querySelector(".items");

    itemContainer?.innerHTML = images
      .map(
        (item) => `  <div class="item item-media">
    <div class="item-title">
      <h1>${item.title}</h1>
    </div>
    <div class="image">
      <img src=${item.url} alt=${item.title}/>
    </div>
    <button class="delete">❌</button>
  </div>`
      )
      .join("");
  }
}

const image = new Image();

const modal = new Modal(image);
const app = new App(modal);

app.run();
