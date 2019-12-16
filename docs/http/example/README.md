# 从0开始发送HTTP请求
------------

>**在此我会举个例子来说明API层是如何调用的**

#### 1. 我们要先检查`proxy`跨域代理是否正确.

```js
const proxyConfig = getConfig('胡坤')
```

如上代码,我们连接的是胡坤的个人服务进行网络请求

#### 2. 定义 **url** ,举例我们要请求 *会员档案/会员一览* 下的列表接口`/crm/memberinfo/querymember`

那么我们就要找到对应的js文件.`constant/url/member.js`

```js
import { server_host_member } from '@/constant/url/base.js'
const MEMBER = {
  MEMBER_ARCHIVE: {
    OVERVIEW: {
      LIST: server_host_member + '/crm/memberinfo/querymember',
    }
  }
}
```

#### 3. 直接页面调用即可

```js
this.$http.post({
  url: this.URL.MEMBER.MEMBER_ARCHIVE.OVERVIEW.LIST,  //url地址
  data: {}, //参数
}).then(res => {
  //返回http状态码200执行此处...
})
```
