<template>
<div>
  <div>演示组件（仅支持文本编辑，不支持上传。上传功能需配置后端接口）</div>
  <editor id="editor_id" height="500px" width="700px" :content="editorText"
          :afterChange="afterChange()"
          :pluginsPath="pluginsPath"
          :loadStyleMode="false"
          @on-content-change="onContentChange"></editor>
  <hr>
  文本内容：
  <div v-html="editorText"></div>
</div>
</template>

<script>
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'
import editor from 'vue-kindeditor/src/components/KindEditor'

export default {
  name: "hello",
  components: {
    editor
  },
  data() {
    return {
      header: {},
      editorText: '',
      pluginsPath: '/static/kindeditor/plugins/'
    }
  },

  mounted () {
  },
  methods: {
    onContentChange (val) {
      this.editorText = val
    },
    afterChange () {
    }
  }
}
</script>

<style scoped>

</style>
