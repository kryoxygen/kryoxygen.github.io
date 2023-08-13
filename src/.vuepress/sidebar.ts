import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": ["", "intro", "slides"],
  "/demo/": [
    {
      text: "如何使用",
      icon: "ph:laptop",
      children: "structure",
    },
  ],
  "/posts/": [
    {
      text: "文章",
      icon: "book",

      children: "structure",
    },
  ],
  "/notes/": [
    {
      text: "文章",
      icon: "book",

      children: "structure",
    },
  ],
});
