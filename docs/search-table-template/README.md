# 搜索表格页模板

## 使用示例
模板
```html
  <search-table-page
      class="table-container"
      :pageSize="pageSize"
      :currentPage="currentPage"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
      
      <template v-slot:searchForm>
        <!-- 这里搜索条件 -->
      </template>
      <template v-slot:btns>
        <!-- 这里 -->
        <el-button @click="privateRest" type="primary" plain icon="el-icon-refresh">重置</el-button>
        <el-button @click="handleSearch" type="primary" icon="el-icon-search">搜索</el-button>
      </template>
      <template v-slot:centerBtns>
        <div>
          <el-button @click="active" type="primary" icon="el-icon-circle-check" size="mini" >启用</el-button>
          <el-button @click="stop" type="primary" icon="el-icon-warning-outline" size="mini" >停用</el-button>
        </div>
      </template>
      <template v-slot:table>
        <!-- 这里放置表格的内容 -->
      </template>
    </search-table-page>
```

script代码
```js
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
```
## search-table-page 组件详解
### 插槽
#### searchForm
写搜索条件，结构任意
#### btns
放置搜索和重置的按钮
#### centerBtns
放置启用停用添加的按钮，注意里边要包一层 div 再写按钮
#### table
放置表格的内容

### props
* currentPage 当前页码
* pageSize 表格的分页尺寸
* total 列表元素总数量
* showSearch 是否显示顶部的搜索框

### events
* size-change 列表每一页显示数量发生变化的时候派发
* current-change 列表当前页码发生变化的时候派发
* 注：这两个事件我写在了


## 查询搜索功能
### 无条件查询
使用前需要定义 listUrl，获取列表的接口。  
将 pageSize 、currentPage 传给后端。  
如需要更改参数，在组件中复写 `handleListParameters` 函数，将要传给后端的 post body 作为函数的返回值。
### 有条件查询
使用前需要定义 searchUrl，搜索列表的接口，通常与 listUrl 相同。  
查询功能默认将组件中 filters 中的字段和 pageSize 、currentPage 组成起来发送给后端。  
如需要更改参数，在组件中复写 `handleSearchParameters` 函数，将要传给后端的 post body 作为函数的返回值。

### 重置搜索
如果点击重置之后需要进行其他操作，可以自定义点击重置的回调，只需在自定义的回调函数中调用一下 `handleReset` 方法

## 表格分页功能
默认实现了表格功能  
如果需要可以自己操作 currentPage pageSize tableData
## 启用停用功能
需要定义如下变量：  
1. editStatusUrl：切换启用停用状态的请求地址。
2. idAttr：启用停用的时候，需要传递给后端的属性的名称，如 id，empId，memberId
3. idsAttr：启用停用的时候，需要传递给后端的列表参数名称，如 ids，memberIds
4. activeStatus：启用状态的 status 或者 isDel 的属性值
5. stopStatus：停用状态的 status 或者 isDel 的属性值

定义好了之后，设置启用按钮的回调函数为 active，设置停用按钮的回调函数为 stop就可以了。  
