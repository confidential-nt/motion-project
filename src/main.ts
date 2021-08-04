import Image from "./composition/image";
import Video from "./composition/video";
import Note from "./composition/note";
import Task from "./composition/task";
import { Iimage } from "./interfaces/i-image";

class App {
  private static buttons: NodeListOf<HTMLButtonElement> | undefined;

  constructor(private image: Iimage) {
    App.buttons = document.querySelectorAll(".nav-btn");
  }

  run() {
    this.handleBtnClickEvent();
  }

  private handleBtnClickEvent() {
    App.buttons?.forEach((btn) =>
      btn.addEventListener("click", this.displayModal.bind(this))
    );
  }

  private displayModal(e) {
    const { func } = e.target.dataset;

    switch (func) {
      case "image":
        image.displayHTML();
        break;
      case "video":
        break;
      case "note":
        break;
      case "task":
        break;
      default:
        break;
    }
  }
}

const image = new Image();
const app = new App(image);

app.run();
