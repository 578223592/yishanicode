import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", //首页
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
    text: '更多',
    children: [
      {
        text: '关于作者',
        children: [
          '/more_about/writer_about.md',
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
  {
    text: '参考',
    children: [
      {
        text: '核心',
        children: [
          '/zh/reference/cli.md',
          '/zh/reference/config.md',
          '/zh/reference/frontmatter.md',
          '/zh/reference/components.md',
          '/zh/reference/plugin-api.md',
          '/zh/reference/theme-api.md',
          '/zh/reference/client-api.md',
          '/zh/reference/node-api.md',
        ],
      },
      {
        text: '打包工具',
        children: [
          '/zh/reference/bundler/vite.md',
          '/zh/reference/bundler/webpack.md',
        ],
      },
      {
        text: '生态系统',
        children: [
          {
            text: '默认主题',
            link: 'https://ecosystem.vuejs.press/zh/themes/default/',
          },
          {
            text: '插件',
            link: 'https://ecosystem.vuejs.press/zh/plugins/',
          },
        ],
      },
    ],
  },
  {
    text: '了解更多',
    children: [
      {
        text: '深入',
        children: [
          '/zh/advanced/architecture.md',
          '/zh/advanced/plugin.md',
          '/zh/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/zh/advanced/cookbook/',
          },
        ],
      },
      {
        text: '其他资源',
        children: [
          {
            text: '生态系统',
            link: 'https://ecosystem.vuejs.press/zh/',
          },
          {
            text: '市场',
            link: 'https://marketplace.vuejs.press/zh/',
          },
          {
            text: '贡献指南',
            link: 'https://github.com/vuepress/core/blob/main/CONTRIBUTING_zh.md',
          },
        ],
      },
    ],
  },
]);
