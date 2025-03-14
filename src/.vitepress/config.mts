import { defineConfig } from "vitepress";
import getSidebar from "./sidebar";

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
    sidebar: getSidebar(),

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
