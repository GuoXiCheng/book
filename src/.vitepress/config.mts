import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的书架",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Book", link: "/2022/human-weakness" },
    ],
    aside: false,
    sidebar: [
      {
        text: "2025",
        items: [{ text: "财富去哪儿", link: "/2025/001-where-does-the-wealth-go" }],
      },
      {
        text: "2024",
        items: [{ text: "金字塔原理", link: "/2024/001-pyramid-principle" }],
      },
      {
        text: "2023",
        items: [{ text: "自控力", link: "/2023/001-self-control" }],
      },
      {
        text: "2022",
        items: [{ text: "人性的弱点", link: "/2022/human-weakness" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
