import config from "@/libs/config";
import { getTicket } from "@/libs/util";
import { useWebsocketStore } from "@/stores/websocket";

const socketAddr = config.socketAddr;

function getSocket(): WebSocket | undefined {
  const store = useWebsocketStore();
  let websocket: WebSocket;
  // 判断当前浏览器是否支持WebSocket
  if ("WebSocket" in window) {
    websocket = new WebSocket(
      socketAddr + "?ticket=" + getTicket() + "&app=stouch"
    );
    // 连接发生错误的回调方法
    websocket.onerror = function () {
      store.online = false
      console.log("error");
    };
    // 连接成功建立的回调方法
    websocket.onopen = function (event) {
      store.online = true
      console.log("open");
    };
    // 接收到消息的回调方法
    websocket.onmessage = function (event: MessageEvent) {
      console.log(event.data);
      store.message = event.data;
    };
    // 连接关闭的回调方法
    websocket.onclose = function () {
      store.online = false
      console.log("close");
    };
    window.onbeforeunload = function () {
      store.online = false
      websocket.close();
    };
    return websocket;
  } else {
    alert("Not support websocket");
  }
}

let websocket: WebSocket | undefined;
export function loadWebsocketNow() {
  const { online } = useWebsocketStore();
  if (getTicket() !== "" && !online) {
    websocket = getSocket();
    console.log("try connect websocket server...");
  }
}

export function loadWebsocket() {
  setInterval(() => {
    loadWebsocketNow()
  }, 15000);
}

export function keepLive() {
  setInterval(() => {
    if (websocket !== undefined) {
      websocket.send("ping");
    }
  }, 30000);
}

export function sendMessage(message: object): boolean {
  if (websocket !== undefined) {
    websocket.send(JSON.stringify(message));
    return true;
  } else {
    return false;
  }
}
