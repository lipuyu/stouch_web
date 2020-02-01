<template>
  <div>
    <Row type="flex">
      <Col span="2"><Avatar icon="ios-person" size="large" /></Col>
      <Col span="22" class='topic' :style="{textAlign: 'justify', paddingLeft: '16px'}" v-html="content"></Col>
    </Row>
    <Row :style="{marginTop: '8px', fontSize: '14px'}">
      <Col span="6">
        <Icon type="ios-eye" size="22"/> 1
      </Col>
      <Col span="6">
        <Icon type="ios-text-outline" size="22"/> 1
      </Col>
      <Col span="6">
        <Icon type="md-heart-outline" size="22"/> 1
      </Col>
      <Col span="6">
        <Button type="text" :style="{height: '24px'}">Book</Button>
      </Col>
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
    margin-bottom: 0em;
  }
  .topic ul, .topic ol {
    margin-left: 2em;
  }
  .topic img {
    max-width: 100%;
    margin-top: 0.5em;
  }
</style>
