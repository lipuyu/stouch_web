import Topic from '@/views/Topic'
import Login from '@/views/Login'
import Template from '@/views/Template'

export default [
  {
    path: '/',
    name: 'home',
    component: Topic
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/template',
    name: 'Template',
    component: Template
  }
]
