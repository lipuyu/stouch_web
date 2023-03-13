import { type Ref, ref, type UnwrapRef } from "vue";
import { defineStore } from "pinia";

export class LiveMessage {
  public code: number = 0;
  public data: object = {};
}

export class LiveCountMessage {
  public count: number = 0;
}

export const useWebsocketStore = defineStore("websocket", () => {
  const message: Ref<UnwrapRef<LiveMessage>> = ref(new LiveMessage());
  const online: Ref<UnwrapRef<boolean>> = ref(false);
  const liveCount = ref(0);
  function setMessage(message1: LiveMessage) {
    message.value = message1;
    if (message1.code === 0) {
      liveCount.value = (message1.data as LiveCountMessage).count;
    }
  }
  return { message, online, liveCount, setMessage };
});
