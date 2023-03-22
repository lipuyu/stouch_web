import config from "@/libs/config";
import { useWebsocketStore } from "@/stores/websocket/websocket";
import type { LiveMessage } from "@/stores/websocket/class";

const socketAddr = config.socketAddr;

function getSocket(): WebSocket | undefined {
  const store = useWebsocketStore();
  let websocket: WebSocket;
  // 判断当前浏览器是否支持WebSocket
  if ("WebSocket" in window) {
    websocket = new WebSocket(socketAddr);
    // 连接发生错误的回调方法
    websocket.onerror = function () {
      store.online = false;
      console.log("error");
    };
    // 连接成功建立的回调方法
    websocket.onopen = function () {
      store.online = true;
      console.log("open");
    };
    // 接收到消息的回调方法
    websocket.onmessage = function (event: MessageEvent) {
      if (event.data !== "pong") {
        store.setMessage(JSON.parse(event.data));
      }
    };
    // 连接关闭的回调方法
    websocket.onclose = function () {
      store.online = false;
      console.log("close");
    };
    window.onbeforeunload = function () {
      store.online = false;
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
  if (!online) {
    websocket = getSocket();
    console.log("try connect websocket server...");
  }
}

export function keepLive() {
  setInterval(() => {
    const { online } = useWebsocketStore();
    if (online && websocket) {
      websocket.send("ping");
    } else {
      loadWebsocketNow();
    }
  }, 30000);
}

export function sendMessage(message: LiveMessage): boolean {
  if (websocket !== undefined) {
    websocket.send(JSON.stringify(message));
    return true;
  } else {
    return false;
  }
}
