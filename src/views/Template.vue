<template>
  <div>
    <ckeditor class="ck" :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <button @click="click1">打印</button>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'
export default {
  name: 'app',
  data () {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        language: 'zh-cn'
      }
    }
  },
  methods: {
    click1 () {
      console.log(this.editorData)
    }
  }
}
</script>
<style>
  .ck {
    text-align: justify;
  }
</style>
