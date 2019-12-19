# dialog 组件内部的布局容器
> 维护者：吕嘉文(daughlas@gmail.com)  
> 维护者：王浩(gougewh@sina.com)
## 添加类型的容器
### 使用场景
弹窗组件的通用布局样式，包含顶部（标题 + 右侧关闭按钮），底部的确定和取消按钮。
### 使用示例
```html
<template>
  <dialog-wrap title="添加单据" @cancel="$emit('close')" @on-confirm="confirmHandler">
</template>
<script>
import DialogWrap from '@/layout/add-dialog'
export default{
  components: {
    DialogWrap
  },
  methods: {
    confirmHandler() {
      // 具体的业务逻辑
    }
  }
}
</script>
```
### 属性
|名称|说明|
|---|---|
|title|弹窗的标题|
### 事件
|名称|说明|备注
|---|---|---|
|on-confirm|点击确认按钮的回调||
|cancel|点击取消按钮或者顶部关闭按钮的回调|目前默认写成 @cancel="$emit('close')" 直接关闭弹窗|

## 详情类型的容器
### 使用场景
弹窗组件的通用布局样式，包含顶部（标题 + 右侧关闭按钮），底部没有按钮。
### 使用示例
```html
<template>
  <dialog-wrap title="会员活动详情" @cancel="$emit('close')"></dialog-wrap>
</template>
<script>
import DialogWrap from '@/layout/detail-dialog'
export default{
  components: {
    DialogWrap
  }
}
</script>
```
### 属性
|名称|说明|
|---|---|
|title|弹窗的标题|
### 事件
|名称|说明|
|---|---|
|cancel|点击顶部关闭按钮的回调|目前默认写成 @cancel="$emit('close')" 直接关闭弹窗|