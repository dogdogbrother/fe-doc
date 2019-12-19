# 搜索表格页模板
> 维护者：吕嘉文(daughlas@gmail.com)

## 使用场景
最常见的顶部搜索底部列表的页面可以使用这个组件，快速生成模板。  
这个组件需要和 `@/mixins/search-list` 的 listMixin 配套使用。  
目前可以半自动化实现的功能有：
* 请求列表
* 搜索列表
* 重置列表
* 启用停用
* 分页查询  
  
具体使用示例如下：
## 使用示例
```html
<template>
  <search-table-page
      class="table-container"
      :pageSize="pageSize"
      :pageNumber="pageNumber"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    <template v-slot:searchForm>
      <!-- 这里搜索条件 -->
    </template>
    <template v-slot:btns>
      <!-- 这里放置重置搜索等按钮 -->
      <el-button @click="privateRest" type="primary" plain icon="el-icon-refresh">重置</el-button>
      <el-button @click="handleSearch" type="primary" icon="el-icon-search">搜索</el-button>
    </template>
    <template v-slot:centerBtns>
      <!-- 这里放置启用停用导入导出等按钮 -->
      <div>
        <el-button @click="active" type="primary" icon="el-icon-circle-check" size="mini" >启用</el-button>
        <el-button @click="stop" type="primary" icon="el-icon-warning-outline" size="mini" >停用</el-button>
      </div>
    </template>
    <template v-slot:table>
      <!-- 这里放置表格的内容 -->
    </template>
  </search-table-page>
</template>
<script>
import SearchTablePage from '@/layout/search-table-page.vue'
import listMixin from '@/mixins/search-list'
import Wrap from '@/layout/wrap-main'
export default {
  components: {
    'search-table-page': SearchTablePage
  },
  mixins: [listMixin],
  data () {
    return {
      filters: {
        // 查询条件
      },
      listUrl: this.URL.BASIC_DATA.USER.INFO.LIST,
      searchUrl: this.URL.BASIC_DATA.USER.INFO.LIST,
      editStatusUrl: this.URL.BASIC_DATA.USER.INFO.EDIT_STATUS,
      idAttr: 'empId',
      idsAttr: 'empIdList',
      activeStatus: 1,
      stopStatus: 0
    }
  },
  methods: {}
}
</script>
```

## search-table-page 组件详解
### search-table-page 插槽 slot
|名称|说明|备注|
|---|---|---|
|searchForm|写搜索条件，建议使用el-row，el-col 和 el-form-item 配合布局||
|btns|搜索栏下面搜索和重置等按钮写在这个插槽中||
|centerBtns|放置启用、停用、导入、导出等按钮，按钮的 size 要写成 mini|注意里边要包一层 div 再写按钮|
|table|放置表格的内容||

### search-table-page 属性 props
|名称|说明|备注|
|---|---|---|
|pageNumber|列表（表格）的页码|---|
|pageSize|列表（表格）每页展示的数量|---|
|total|列表（表格）内容的总数|---|
|showSearch|
### search-table-page 事件 events
|名称|说明|备注|
|---|---|---|
|size-change|列表每一页显示数量发生变化的时候派发|通常使用 listMixin 中已经有的handleSizeChange 方法|
|current-change|列表当前页码发生变化的时候派发|通常使用 listMixin 中已经有的 handleCurrentChange 方法|



## 业务页面中 listMixin 相关需要的一些配合

### data 中需要配置的属性
|名称|说明|备注|
|---|---|---|
|filters|搜索条件的对象||
|listUrl|列表请求的地址||
|searchUrl|点击搜索按钮时请求的地址|通常和 listUrl 一样，为了兼容老接口，一个字段目前重写两次|
|editStatusUrl|点击启用停用的时候请求的接口||
|idAttr|列表（表格）中每一条信息的唯一标识名称，例如empId， activityId|现阶段主要用于启用停用的时候传给后台那个参数|
|idsAttr|点击启用停用的时候请求的接口，传给后台 id 集合的字段的名称||
|activeStatus|启用状态对应的字典值|通常为1|
|stopStatus|停用状态对应的字典值|通常为0|

### methods 中根据业务做更改

|名称|说明|备注|
|---|---|---|
|handleReset|重置 filter 参数为默认值|这个方法 mixin 中已经写了，重置按钮的回调可以默认写成这个函数，如果需要配置重置操作，可以在自定义函数中调用这个参数||
|handleListParameters|没有搜索条件的时候，如果需要配置请求参数，编辑此函数，函数的返回值作为请求的 body 穿给后端进行查询|需要自己将 pageSize 、pageNumber 传递进返回对象|
|handleSearchParameters|有搜索条件的时候，如果需要配置请求参数，编辑此函数，函数的返回值作为请求的 body 穿给后端进行查询|需要自己将 pageSize 、pageNumber 传递进返回对象|
