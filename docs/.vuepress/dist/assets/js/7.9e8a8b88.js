(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{365:function(t,n,e){"use strict";e.r(n);e(356),e(357);var o={name:"hello",components:{editor:e(362).a},data:function(){return{header:{},editorText:"",pluginsPath:"/static/kindeditor/plugins/"}},mounted:function(){},methods:{onContentChange:function(t){this.editorText=t},afterChange:function(){}}},i=e(42),r=Object(i.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v("演示组件（仅支持文本编辑，不支持上传。上传功能需配置后端接口）")]),t._v(" "),e("editor",{attrs:{id:"editor_id",height:"500px",width:"700px",content:t.editorText,afterChange:t.afterChange(),pluginsPath:t.pluginsPath,loadStyleMode:!1},on:{"on-content-change":t.onContentChange}}),t._v(" "),e("hr"),t._v("\r\n  文本内容：\r\n  "),e("div",{domProps:{innerHTML:t._s(t.editorText)}})],1)}),[],!1,null,"007d65d0",null);n.default=r.exports}}]);