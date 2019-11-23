import config from '@/config'
import {getToken} from './util'

const socketAddr = process.env.NODE_ENV === 'development' ? config.socketAddr.dev : config.socketAddr.pro

export default function getSocket () {
  let websocket = null
  // 判断当前浏览器是否支持WebSocket
  if ('WebSocket' in window) {
    websocket = new WebSocket(socketAddr + '?ticket=' + getToken() + '&app=stouch')
  } else {
    alert('Not support websocket')
  }
  // 连接发生错误的回调方法
  websocket.onerror = function () {
    console.log('error')
  }
  // 连接成功建立的回调方法
  websocket.onopen = function (event) {
    console.log('open')
  }
  // 接收到消息的回调方法
  websocket.onmessage = function (event) {
    console.log(event)
    console.log(event.data)
  }
  // 连接关闭的回调方法
  websocket.onclose = function () {
    console.log('close')
  }
  window.onbeforeunload = function () {
    websocket.close()
  }
  return websocket
}
