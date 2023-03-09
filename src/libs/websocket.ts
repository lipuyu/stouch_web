import config from "@/libs/config";
import { getTicket } from "@/libs/util";
import { useMessageStore } from "@/stores/message";

const socketAddr = config.socketAddr;
const { pushMessage } = useMessageStore();

export default function getSocket() {
  let websocket: WebSocket;
  // 判断当前浏览器是否支持WebSocket
  if ("WebSocket" in window) {
    websocket = new WebSocket(
      socketAddr + "?ticket=" + getTicket() + "&app=stouch"
    );
    // 连接发生错误的回调方法
    websocket.onerror = function () {
      console.log("error");
    };
    // 连接成功建立的回调方法
    websocket.onopen = function (event) {
      console.log("open");
    };
    // 接收到消息的回调方法
    websocket.onmessage = function (event: MessageEvent) {
      console.log(event);
      console.log(event.data);
      pushMessage(event.data);
    };
    // 连接关闭的回调方法
    websocket.onclose = function () {
      console.log("close");
    };
    window.onbeforeunload = function () {
      websocket.close();
    };
    return websocket;
  } else {
    alert("Not support websocket");
  }
}
