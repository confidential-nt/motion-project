export type Media = "image" | "video" | "note" | "task";

export type Item = {
  title: string;
  url?: string;
  body?: string;
};
