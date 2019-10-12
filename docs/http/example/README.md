# 从0开始发送HTTP请求
------------

>**在此我会举个例子来说明API层是如何调用的**

1. 首先定义 **url** ,举例我们要请求会 *员档案/会员一览* 下的列表接口`/crm/memberinfo/querymember`

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

2. 直接页面调用即可

```js
this.$http.post({
  url: this.URL.MEMBER.MEMBER_ARCHIVE.OVERVIEW.LIST,  //url地址
  data: {}, //参数
}).then(res => {
  //返回http状态码200执行此处...
})
```
