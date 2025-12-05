import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  lang: 'zh-Hans',
  base: '/932a499d453f/',
  title: "小米盒子5 (MOB2MB-5P) 文档",
  description: "适用于 小米盒子5 (MOB2MB-5P) 的文档，提供了部分硬件信息、实机照片、拆机照片、UART/TTL 连接信息、Android 分区表、如何 Root 等相关信息。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '返回首页', link: '/' }
    ],

    sidebar: [
      {
        text: '返回首页', link: '/index',
        items: [
          { text: '硬件信息', link: '/hardware' },
          { text: '解除 Bootloader 锁定', link: '/unlock_bootloader' },
          { text: '通过 DSU 来备份分区', link: '/backup' },
          { text: '如何 Root', link: '/root' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xpxp233333/xiaomi-mibox5-guides' }
    ],

    outline: {
      label: '目录'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    footer: {
      message: '此文档与小米公司没有任何关联',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    notFound: {
      title: '请求的页面不存在',
      quote: '请检查URL是否正确',
      linkText: '返回首页'
    },

    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '配色方案',
    lightModeSwitchTitle: '切换至亮色模式',
    darkModeSwitchTitle: '切换至深色模式'
  },

  markdown: {
    container: {
      noteLabel: '注意',
      tipLabel: '提示',
      importantLabel: '重要',
      warningLabel: '警告',
      dangerLabel: '危险',
      cautionLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})
