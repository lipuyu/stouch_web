export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: '聊几句',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description api请求基础路径
   */
  homeName: 'home',
  baseUrl: {
    dev: 'http://127.0.0.1:8080',
    pro: 'http://www.duanzt.com'
  },
  socketAddr: {
    dev: 'ws://127.0.0.1:8080/websocket',
    pro: 'ws://www.duanzt.com/websocket'
  }
}
