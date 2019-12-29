<template>
  <div>
    <ckeditor :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'

export default {
  name: 'Editor',
  model: {
    prop: 'editorData',
    event: 'change'
  },
  props: {
    editorData: String
  },
  data () {
    return {
      editor: ClassicEditor,
      content: this.editorData,
      editorConfig: {
        language: 'zh-cn',
        cloudServices: {
          uploadUrl: 'http://172.16.4.126:8000/storage/image/admin_upload'
        }
      }
    }
  },
  watch: {
    content: function (newQ, oldQ) {
      this.$emit('change', newQ)
    },
    editorData: function (newQ, oldQ) {
      this.content = this.editorData
    }
  }
}
</script>
<style>
  .ck-editor {
    text-align: justify;
  }
  .ck-editor p, .ck-editor ul, .ck-editor blockquote {
    line-height: 1.15em;
    margin-bottom: .3em;
  }
  .ck-editor ul, .ck-editor ol {
    margin-left: 2em;
  }
</style>
