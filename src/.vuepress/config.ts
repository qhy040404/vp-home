import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "qhy 的小破网站",
  description: "啥也没有",

  theme,
});
