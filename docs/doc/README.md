# 此文档的维护与开发
----------
>**此文档是用 [ vueress ](https://vuepress.vuejs.org/zh) 开发完成**  

虽然是叫vuepress,但是目录结构和vue的是不同的

## 项目结构

```javascript
├── docs                               // 这个是主要的开发目录(必选)
    ├── .vuepress                      // 配置目录
    │   ├── templates                  // 模板目录(可选)
    │   │   └── dev.html               // markdown终归会变成thml,这个就是挂载模板
    │   └── config.js                  // 很关键的配置文件,侧边栏导航头部都是在这里配置的(必选)
    ├── doc                            // 就是现在这个页面,aside配置中path:'/doc/'即可
    └── README.md                      // '/' 目录下的页面
```
## 运行/打包

运行 `npm run dev`  

打包 `npm run build`

## 暂时的项目开发仓库

[临时的文档仓库地址](https://github.com/dogdogbrother/fe-doc)

## 暂时的线上地址

+ [阅读文档](http://148.70.108.11:5000)

+ 如果上面的地址失效,请尝试 [github.io浏览文档](https://github.com/dogdogbrother/fe-doc)

## 如何更新文档

只需要`push`更新`master`分支,线上即自动更新

