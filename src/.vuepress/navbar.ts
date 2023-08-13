import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "常用工具",
    icon: "bi:tools",
    prefix: "/tools/",
    children: [
      // {
      //   text: "Rust",
      //   icon: "simple-icons:rust",
      //   link: "rust/",
      // },
      {
        text: "Git",
        icon: "bi:git",
        link: "git",
      },
      {
        text: "Makefile",
        icon: "vscode-icons:file-type-makefile",
        link: "makefile",
      },
      {
        text: "CMake",
        icon: "simple-icons:cmake",
        link: "cmake",
      },
      {
        text: "GCC工具链",
        icon: "devicon-plain:gcc",
        link: "gcc",
      },
      {
        text: "GDB调试",
        icon: "file-icons:gdb",
        link: "gdb",
      },
      {
        text: "Markdown",
        icon: "tabler:markdown",
        link: "markdown",
      },
    ],
  },
  {
    text: "学习记录",
    icon: "clarity:note-solid",
    prefix: "/notes/",
    children: [
      {
        text: "C++",
        icon: "mdi:language-cpp",
        link: "cpp/",
      },
      {
        text: "Linux",
        icon: "uil:linux",
        link: "linux/",
      },
      {
        text: "Rust",
        icon: "simple-icons:rust",
        link: "linux/",
      },
      {
        text: "Qt",
        icon: "simple-icons:qt",
        link: "qt/",
      },
      {
        text: "其他",
        icon: "uil:linux",
        link: "linux/",
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "bxs:book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
