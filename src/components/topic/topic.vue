<template>
  <div>
    <Row type="flex">
      <Col span="2"><Avatar icon="ios-person" size="large" /></Col>
      <Col span="22" class='topic' :style="{textAlign: 'justify', paddingLeft: '16px'}" v-html="content"></Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Topic',
  props: ['content'],
  data () {
    return {
    }
  }
}
</script>
<style>
  .topic p, .topic ul, .topic blockquote {
    line-height: 1.15em;
    margin-bottom: .75em;
  }
  .topic ul, .topic ol {
    margin-left: 2em;
  }
</style>
