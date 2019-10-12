# 自动化脚本
>**都是用的shellJS实现的,稍稍的解放下人力**

## 简易的自动化部署

1. 通过git托管平台的 `webhooks` 钩子功能,当我在 `master` 分支 `push` 代码时,触发 `post` 请求.

![webhooks](../public/images/webhooks.png)

2. 服务端简单的编写node/app.js文件,即可实现自动拉取代码的操作.

```js
const express = require('express');
const app = express();
const shell = require('shelljs');
app.post('/feDoc/hooks',(req,res) =>{
	shell.exec('cd /var/www/fe-doc/ && git pull origin master')
});
```

3. pm2守护进程  
服务端执行 `pm2 start /var/www/fe-doc/app.js` ,大功告成.
