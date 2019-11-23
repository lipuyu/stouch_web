<template>
  <Card style="width: 600px;display:inline-block;position:relative;vertical-align:middle;line-height:normal;">
    <topic v-model="editorData"></topic>
    <Button @click="handleSubmit" type="primary" long>发送</Button>
  </Card>
</template>

<script>
import Topic from '@/components/topic/topic'
import getSocket from '@/libs/websocket'
import {bookContent, commitContent} from '@/api/content'

let websocket

export default {
  name: 'home',
  components: {Topic},
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
  },
  data () {
    return {
      editorData: '<p>hello</p>'
    }
  },
  methods: {
    handleSubmit () {
      commitContent(1, this.editorData).then(res => {
        this.editorData = ''
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
