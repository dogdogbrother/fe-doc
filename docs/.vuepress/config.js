module.exports = {
  title: '前端开发手册',
  description: '瑞合的后台系统的开发文档',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `../public/icon/favicon.ico` }]
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
        title: '网络请求',
        children: [
          {
            title: '从0开始发送HTTP请求',
            path:'/http/example/'
          }
        ]
      },
      {
        title: '此文档的维护与开发',
        path: '/doc/'
      }
    ]
  }
}

