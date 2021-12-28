import { Item, Media } from "../type/type";

class Input {
  private inputs!: NodeListOf<HTMLInputElement>;
  private submitBtn!: HTMLButtonElement | null;
  private ItemList: HTMLDivElement | null = document.querySelector(".items");
  private items: Item[] = [];

  private type: Media;

  private static KEY: string = "ITEMS";

  constructor() {}

  run(type: Media) {
    this.inputs = document.querySelectorAll(".modal-input input");
    this.submitBtn = document.querySelector(".add-btn");
    this.type = type;
    this.turnOnInputEvent();
  }

  private turnOnInputEvent() {
    this.submitBtn?.addEventListener("click", this.handleSubmit.bind(this));
  }

  private handleSubmit(e) {
    if (!this.items.length) {
      const preItem = localStorage.getItem(Input.KEY);

      if (preItem) {
        this.items.push(...JSON.parse(preItem));
      }
    }

    const url =
      this.inputs[1].dataset.type === "url" ? this.inputs[1].value : undefined;
    const body =
      this.inputs[1].dataset.type === "body" ? this.inputs[1].value : undefined;

    const obj: Item = {
      title: this.inputs[0].value,
      url: url,
      body: body,
      type: this.type,
      id: Date.now(),
    };

    if (!obj.title) return;

    if (obj.type === "image" && !obj.url?.includes("data:image")) return;

    if (obj.type === "video") {
      if (obj.url?.includes("youtube") || obj.url?.includes("youtu.be")) {
      } else return;
    }

    if (obj.type === "video" && !obj.url?.includes("embed")) {
      obj.url = `https://www.youtube.com/embed/${obj.url.slice(17)}`;
    }

    this.items.push(obj);

    localStorage.setItem(Input.KEY, JSON.stringify(this.items));

    for (let input of this.inputs) {
      input.value = "";
    }

    this.draw();
  }

  draw() {
    let mediaHtml;

    this.ItemList?.innerHTML = this.items
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
      item.type === "image" ? "image" : item.type === "video" ? "video" : "body"
    }>
      ${mediaHtml}
    </div>
    <button class="delete">❌</button>
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

    const findingIndex = this.items.findIndex((el) => el.id == item.id);

    this.items.splice(findingIndex, 1);

    localStorage.setItem(Input.KEY, JSON.stringify(this.items));
  }
}

export default Input;
