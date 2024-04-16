import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import {
  head,
  navbarEn,
  navbarZh,
  sidebarEn,
  sidebarZh,
} from './configs/index.js'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { appendDatePlugin } from '@vuepress/plugin-append-date'
import { seoPlugin } from '@vuepress/plugin-seo'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({

  lang: 'zh-CN',//'en-US',
  // set site base to default value
  base: '/',
  // extra tags in `<head>`
  head,
  title: '一山的学习笔记',
  description: '从自学转码到校招进入职场，深感自学的困难。独行难，众行易。在这里整理分享自己学习过程中的资料，一起加油！',
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: '578223592/yishanicode',
    docsDir: 'docs',
    // navbar
    navbar: navbarEn,
    // sidebar
    sidebar: sidebarEn,
    // page meta
    editLinkText: 'Edit this page on GitHub',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),

  bundler: viteBundler(),
  // use plugins
  plugins: [
    copyCodePlugin({
      // options
    }),

    searchPlugin({
      // 配置项
    }),
    appendDatePlugin(),
    // 搜索引擎增强
    // seoPlugin({
    //   // 选项
    // }),
  ],
})

