# 字典
> 维护者：吕嘉文(daughlas@gmail.com)  
> 维护者：王浩(gougewh@sina.com)

## 使用场景
统一配置字典。  
统一引入字典到全局。  

## 使用方法
修改字典文件，请修改 `@/constant/dictionary`。  
引用和挂载的是在`@utils/global-parameter.js`文件中。  
字典文件已经注册到全局根组件，在 vue 实例中使用直接使用 `this.SLDictionary[字典名称]` 即可。

在其他地方使引入该模块即可。  
字典文件通常配合全局组件 for-option 使用，使用方法如下：
```html
<el-select>
  <for-option :options="SLDictionary.MEMBER_TYPE_OPTIONS">
</el-select>
```

读取属性的值时候可调用全局 mixin 中的 getLabelFromDict 方法，使用方法如下：  

```html
<el-table-column>
  <template slot-scope="scope">
    {{getLabelFromDict(SLDictionary.MEMBER_TYPE_OPTIONS, scope.row, 'memberType')}}
  </template>
<el-table-column>
```

## 例外
由于种种原因，会员等级的字典存在 sessionStorage 之中，每次登陆系统会自动重新获取最新字典存在 sessionStorage 中，使用的时候请注意从其中取值。