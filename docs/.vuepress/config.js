module.exports = {
    title: '前端宝典',
    description: '个人知识总结',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/base/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false, // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '前端基础', link: '/basics/' },
        {text: '算法题库', link: '/algorithm/'},
      ],
      // sidebar:'auto',
      sidebar: {
        "/basics/": [
          {
            title: "目录",
            collapsable: false,
            path:'',
            children: ["", "javascript"],
          },
        ],
        "/algorithm/":[
          {
            title:'',
            collapsable: false,
            children:["","problem"]
          }
        ],
      }, // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
      smoothScroll:true
    },
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
  };