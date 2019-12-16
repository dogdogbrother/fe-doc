# 全局的定义方式
>**"全局"的定义包含了注册在全局下的组件/mixin/配置,如果你需要定义,请参照下面的指示** 
## 注册全局组件
1. 组件的文件请放在`src/components`对应的目录下,例如是用在对话框的组件,就放在`src/components/dialog`下即可.
2. 编辑`src/common/global-components.js`文件,向componentList数组push如下对象即可全局的组件注册.迭代器函数会用`import()`遍历加载组件
```JavaScript
{ name: 'dialog-header', path: 'components/dialog/dialog-header', describe: '对话框的底部头部' }
```
3. 如果你想注册`node_modules`里面的组件就只能常规注册,因为webpack识别不了无path的变量,而使用`'../../node_modules/...'`的形式会让webpack定位不到资源而超时报错.
```JavaScript
import VePie from 'v-charts/lib/pie.common'
Vue.component('VePie', VePie)   //饼图
```
## 挂载全局的mixin
mixin文件一般都是放在了`src/mixins`目录下,其中`global-mixins.js`是用`Vue.mixin()`挂载到了全局.如需新的全局mixin,请在此处添加修改.

## 挂载在Vue.prototype的属性和方法
`src/utils/global-parameter.js`文件中,挂载了字典`dictionary`属性,`new Http()`http请求方法等.如果添加新的全局方法属性,请在此处添加修改.