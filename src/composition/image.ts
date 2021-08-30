import { Iimage } from "../interfaces/i-image";
import { Item } from "../type/type";

class Image implements Iimage {
  private inputs!: NodeListOf<HTMLInputElement>;
  private submitBtn!: HTMLButtonElement | null;
  private ItemList: HTMLDivElement | null = document.querySelector(".items");
  private items: Item[] = [];

  private static KEY: string;
  constructor() {
    Image.KEY = "IMAGE";
  }

  run() {
    this.inputs = document.querySelectorAll(".modal-input input");
    this.submitBtn = document.querySelector(".add-btn");
    this.turnOnInputEvent();
  }

  private turnOnInputEvent() {
    // this.inputs.forEach((input) =>
    //   input.addEventListener("submit", this.handleSubmit.bind(this))
    // );
    this.submitBtn?.addEventListener("click", this.handleSubmit.bind(this));
  }

  private handleSubmit(e) {
    const preItem = localStorage.getItem(Image.KEY);

    if (preItem) {
      this.items.push(...JSON.parse(preItem));
    }

    const obj: Item = {
      title: this.inputs[0].value,
      url: this.inputs[1].value,
    };

    if (!obj.title || !obj.url) return;

    this.items.push(obj);

    localStorage.setItem(Image.KEY, JSON.stringify(this.items));

    for (let input of this.inputs) {
      input.value = "";
    }

    this.draw(obj);
  }

  draw(item: Item) {
    this.ItemList?.innerHTML = this.items
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

export default Image;
