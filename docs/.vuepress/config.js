module.exports = {
  title: '前端开发手册',
  description: '瑞合的后台系统的开发文档',
  head: [
    ['link', { rel: 'icon', href: `/static/favicon.ico` }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: '常量',
        children: [
          {
            title: '字典',
            path: '/constant/dictionary/'
          },
          {
            title: '请求地址',
            path: '/constant/url/'
          },
          {
            title: '项目根路径配置',
            path: '/constant/config/'
          },
        ]
      },
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
        title: '第三方库',
        children: [
          {
            title: '弹框',
            path: '/third-party/dialog/'
          }
        ]
      },
      {
        title: '布局组件',
        children: [
          {
            title: '列表搜索页',
            path: '/layout/search-table-page/',
          },
          {
            title: '弹窗的容器',
            path: '/layout/dialog-wrap/',
          },
          {
            title: 'Wrap',
            path: '/layout/wrap/',
          },
          {
            title: '内容容器',
            path: '/layout/dialog-card/',
          },
        ]
      },
      {
        title: '常用的组件',
        path: '/common/'
      },
      {
        title: '服务',
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

