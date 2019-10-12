# $http的使用说明
------------

>**$http是封装了axios,然后用Vue.prototype.$http挂载而来.下面来逐一说明参数**

1. **server_host**

因为有基础模块/会员模块/促销品模块,所以有相应的服务端口,例如 `server_host === '/api' === :8072` .
相关的配置文件在根目录, `vue.config.js` 和 `vue-name.config.js`.   
下面的代码块就是说明我们要请求的是会员模块 `/bpi`,实际请求的url为`http://**.*.*.**:8075`

```js
import { server_host_member } from '@/constant/url/base.js'
```

2. **method**

很简单,和axios的链式调用的方式一致.`this.$http.post()`就是post请求,`this.$http.delete()`就是delete请求

3. **url**

```js
url: this.URL.MEMBER.MEMBER_ARCHIVE.OVERVIEW.LIST
```


