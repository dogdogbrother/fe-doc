# 项目根路径配置
> 维护人：吕嘉文(daughlas@gmail.com)

## 使用场景
切换开发和正式环境，http 请求的根路径。  
切换开发环境下不同后台程序员的 IP 地址进行调试。

## 使用方法
开发环境下，运行 `npm run dev`，默认是用 rhhjt.com 进行打包。  
想要更改的话 运行的时候执行 `npm run dev -开发人员姓名简拼`，例如 `npm run dev -hk` 以胡坤的服务进行调试。  
打包生产版本，目前请求根路径使用 localhost，测试问题，需要本地配置 nginx 进行测试，后期进行更改。  
添加或更改后台人员请求地址，请编辑 `/config/hosts.js`