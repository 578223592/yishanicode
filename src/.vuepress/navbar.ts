import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", //首页
  {
    text: '八股文',
    children: [
      {
        text: '前言',
        children: [
          '/notes/foreword/introduction.md',
        ]
      },
      {
        text: '语言',
        children: [
          '/notes/language/introduction.md',
          '/notes/language/page2.md',
        ]
      },
      {
        text: '网络',
        children: [
          '/notes/network/introduction.md',
        ]
      },
      {
        text: '操作系统',
        children: [
          '/notes/os/introduction.md',
        ]
      },
      {
        text: '数据库',
        children: [
          '/notes/database/introduction.md',
        ]
      },
    ],
  },
  "/out_of_code/",
  {
    text: '网站相关',
    children: [
      {
        text: '关于作者',
        children: [
          '/more_about/writer_about.md',
        ]
      },
      {
        text: '内容来源与版权说明',
        children: [
          '/more_about/context.md',
        ]
      },
      {
        text: '贡献指南',
        children: [
          '/more_about/contributing.md',
        ]
      },
      {
        text: '网站时间线',
        children: [
          '/timeline/',
        ]
      },
    ],
  },
  "/demo/", //根据demo文件夹自动生成
  {
    text: "Guide",   //手动设定名字
    icon: "lightbulb",
    prefix: "/guide/", //文件夹前缀
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }], //自动添加“.md"后缀，因此不用手动添加
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
