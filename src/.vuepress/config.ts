import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Kry",
  description: "vuepress-theme-kry",

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => "page.frontmatter.category",
          formatter: "分类：$content",
        },
        {
          getter: (page) => "page.frontmatter.tag",
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  head: [
    // ...

    // 导入相应链接
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Noto+Serif+SC&family=Rubik&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  theme,

  //Enable it with pwa
  shouldPrefetch: false,
});
