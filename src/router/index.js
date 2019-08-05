import Vue from 'vue'
import Router from 'vue-router'
import Topic from '@/views/Topic'
import Template from '@/views/Template'

Vue.use(Router)

export default new Router({
  mode: 'history', // 用路径显示代替锚点
  base: '', // 部署根目录
  routes: [
    {
      path: '/',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    }
  ]
})
