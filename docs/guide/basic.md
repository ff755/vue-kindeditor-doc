# 基础使用
[[toc]]
### 1、安装 vue-kindeditor 插件
```
yarn add vue-kindeditor
```
或
```
npm install vue-kindeditor --save-dev
```

### 2、添加 vue-kindeditor 插件
编辑项目 `/src/main.js` 文件,添加插件配置
```javascript
import Vue from 'vue'
import App from './App'
// 引入js、css文件
import VueKindEditor from 'vue-kindeditor'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'

Vue.config.productionTip = false

// 注册插件
Vue.use(VueKindEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
```

### 3、添加演示代码
编辑 `/src/App.vue` 文件
```vue
<template>
  <div class="hello">
     <editor id="editor_id" height="500px" width="700px" :content="editorText"
        :pluginsPath="pluginsPath"
        :loadStyleMode="false"
        @on-content-change="onContentChange"></editor>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      pluginsPath: '/static/kindeditor/plugins/',
      editorText: ''
    }
  }, 
  methods: {
    onContentChange (val) {
      this.editorText = val
    }
  }
}
</script>
```

::: tip
由于 KindEditor 部分功能，依赖 KindEditor 目录下plugins 的文件，可以把 `node_modules/kindeditor`，
复制到项目 `static` 目录, 并配置`pluginsPath`参数为`/static/kindeditor/plugins/`。
:::
