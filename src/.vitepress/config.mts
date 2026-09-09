import { defineConfig } from "vitepress";
import getSidebar from "./sidebar";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "我的书架",
    description: "A VitePress Site",

    vite: {
      optimizeDeps: {
        include: [
          "mermaid", // 预构建 Mermaid
          "fastdom", // 预构建 CommonJS 依赖
          "fastdom/extensions/fastdom-promised.js", // 预构建其扩展模块
        ],
      },
    },

    themeConfig: {
      nav: [
        { text: "Home", link: "/" },
        { text: "Book", link: "/2022/human-weakness" },
      ],
      aside: false,
      sidebar: getSidebar(),
      socialLinks: [{ icon: "github", link: "https://github.com/GuoXiCheng/book" }],
    },
  }),
);
