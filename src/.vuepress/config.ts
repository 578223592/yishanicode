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


// TODO：在footer部分或者每篇文章最下面补充上交流部分，如：
// 大家有什么问题，欢迎在底下留言提问。另外也可以加我的微信号 dabai0016 进行提问，我下班以后就会回复。
