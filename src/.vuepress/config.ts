import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { head } from "./head.js";
export default defineUserConfig({
  base: "/",
  // extra tags in `<head>`
  head: head,
  lang: 'zh-CN',
  title: "一山的学习笔记",
  description: "✨一山的网站✨",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
