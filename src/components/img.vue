<template>
  <div>
    <div class="demo-upload-list" v-bind:key="url"  v-for="url in urls">
      <img :src="url"/>
      <div class="demo-upload-list-cover">
        <Icon type="ios-eye-outline" @click.native="handleView(url)"></Icon>
      </div>
    </div>
    <Modal title="View Image" v-model="visible">
      <img :src="img_url" style="width: 100%"/>
    </Modal>
  </div>
</template>
<script>
export default {
  name: 'Img',
  props: ['urls'],
  data () {
    return {
      img_url: '',
      visible: false,
      uploadList: []
    }
  },
  methods: {
    handleView (url) {
      this.img_url = url.split('?')[0] + '?x-oss-process=image/resize,w_1080'
      this.visible = true
    }
  }
}
</script>
<style>
    .demo-upload-list{
        display: inline-block;
        width: 80px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
    img {
      image-orientation: from-image;
    }
</style>
