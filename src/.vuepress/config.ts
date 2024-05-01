import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: 'zh-CN',
  title: "一山的学习笔记",
  description: "✨一山的网站✨",
  theme,
  
  // Enable it with pwa
  // shouldPrefetch: false,
});
