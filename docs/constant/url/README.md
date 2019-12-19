# 请求地址
> 维护人：吕嘉文(daughlas@gmail.com)

## 使用场景
目前 调用 http 服务需要的接口地址单独写了一处配置，以便统一管理。  

## 使用示例
### 添加 url
目前由于 url 较多，按模块区分 url
然后统一导入到 @/constant/url 目录之下
然后统一注入到全局根组件之中

### 使用 url
在 Vue 组件之中，直接使用 `this.URL.MEMBER.MEMBER_ACTIVITY.LIST` 即可。  
在 Vue 示例组件之外，按照模块的方式引入和使用。
