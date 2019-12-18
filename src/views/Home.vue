<template>
  <div>
    <Card style="width: 600px; margin: 10px auto" v-bind:key="index" v-for="(content, index) in contents">
      <topic :style="{marginBottom: '10px'}" :content="content"></topic>
    </Card>
    <Card style="width: 600px;display:inline-block;position:relative;vertical-align:middle;line-height:normal;">
      <editor v-model="editorData"></editor>
      <Button @click="handleSubmit" type="primary" long>发送</Button>
    </Card>
  </div>
</template>

<script>
import Editor from '@/components/topic/editor'
import Topic from '@/components/topic/topic'
import getSocket from '@/libs/websocket'
import {bookContent, getContent, postContent} from '@/api/content'

let websocket

export default {
  name: 'home',
  components: {Editor, Topic},
  created: function () {
    let this1 = this
    websocket = getSocket()
    websocket.onmessage = function () {
      console.log(event.data)
      this1.$Notice.info({
        desc: event.data
      })
    }
    bookContent(1).then(res => {}).catch(err => {
      console.log(err)
    })
    this.getContent()
  },
  data () {
    return {
      editorData: '<p>hello</p>',
      contents: ['<h1>content</h1>', '<h1>content</h1>']
    }
  },
  methods: {
    handleSubmit () {
      postContent(this.editorData).then(res => {
        this.editorData = ''
        this.getContent()
      }).catch(err => {
        console.log(err)
      })
    },
    getContent () {
      getContent().then(res => {
        let contents = []
        res.data.data.topics.forEach((value, index) => {
          contents.push(value.content)
        })
        this.contents = contents
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
