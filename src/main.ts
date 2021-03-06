import Modal from "./composition/modal";
import Input from "./composition/input";
import DragDrop from "./composition/dragDrop";
import { iModal } from "./interfaces/i-modal";

class App {
  private ItemList: HTMLDivElement | null = document.querySelector(".items");
  private static buttons: NodeListOf<HTMLButtonElement> | undefined;

  constructor(private Modal: iModal) {
    App.buttons = document.querySelectorAll(".nav-btn");
  }

  run() {
    this.handleBtnClickEvent();
    this.drawItem();
    new DragDrop();
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
    const items = JSON.parse(localStorage.getItem("ITEMS"));

    let mediaHtml;

    this.ItemList?.innerHTML = items
      .map((item) => {
        const itemType = item.body ? "item-text" : "item-media";

        if (item.type === "image") {
          mediaHtml = `<img src=${item.url} alt=${item.title}/>`;
        } else if (item.type === "video") {
          mediaHtml = `<iframe
          width="440"
          height="200"
          src=${item.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>`;
        } else if (item.type === "task") {
          mediaHtml = `<input type="checkbox" id=${item.type}/>
          <label for=${item.type}>${item.body}</label>
          `;
        } else {
          mediaHtml = `<p>${item.body}</p>`;
        }

        return `  <div class="item ${itemType}" id="${
          item.id
        }" draggable="true">
      <div class="item-title">
        <h1>${item.title}</h1>
      </div>
      <div class=${
        item.type === "image"
          ? "image"
          : item.type === "video"
          ? "video"
          : "body"
      }>
        ${mediaHtml}
      </div>
      <button class="delete">???</button>
    </div>`;
      })
      .join("");

    const deleteBtns = this.ItemList?.querySelectorAll(".delete");

    deleteBtns?.forEach((btn) =>
      btn.addEventListener("click", this.deleteItem.bind(this))
    );
  }

  deleteItem(e) {
    const item = e.target.parentNode;
    this.ItemList?.removeChild(item);

    const items = JSON.parse(localStorage.getItem("ITEMS"));

    const findingIndex = items.findIndex((el) => el.id == item.id);

    items.splice(findingIndex, 1);

    localStorage.setItem("ITEMS", JSON.stringify(items));
  }
}

const input = new Input();

const modal = new Modal(input);
const app = new App(modal);

app.run();
