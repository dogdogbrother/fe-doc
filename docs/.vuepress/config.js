module.exports = {
  title: '前端开发手册',
  description: '瑞合的后台系统的开发文档',
  head: [
    ['link', { rel: 'icon', href: `/static/favicon.ico` }]
  ],


  themeConfig: {
    sidebar: [
      {
        title: '全局',
        children: [
          {
            title: '全局的定义方式',
            path:'/global/way/'
          }
        ]
      },
      {
        title: 'dialog对话框',
        path: '/dialog/'
      },
      {
        title: '搜索表格页模板',
        path: '/search-table-template/'
      },
      {
        title: '常用的组件',
        path: '/common/'
      },
      {
        title: '网络请求',
        children: [
          {
            title: '从0开始发送HTTP请求',
            path:'/http/example/'
          },
          {
            title: '$http的使用说明',
            path:'/http/axios/'
          },
        ]
      },
      {
        title: '自动化脚本',
        path: '/shell/'
      },
      {
        title: '此文档的维护与开发',
        path: '/doc/'
      }
    ]
  }
}

