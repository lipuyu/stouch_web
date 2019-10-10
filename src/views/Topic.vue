<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// import { Toast, Indicator } from 'mint-ui'
// Toast({ message: '提示', position: 'bottom', duration: 5000 })
// Indicator.open('加载中...')
export default {
  name: 'Topic',
  data () {
    return { msg: 'Topic' }
  }
}
</script>
