import { Media } from "../type/type";

export interface iModal {
  displayModal(media: Media): void;

  hideModal(): void;
}
