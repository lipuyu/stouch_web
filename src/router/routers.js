import Home from '@/views/Home'
import Login from '@/views/Login'
import Template from '@/views/Template'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
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
