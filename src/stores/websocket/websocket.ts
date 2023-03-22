import { type Ref, ref, type UnwrapRef } from "vue";
import { defineStore } from "pinia";
import { LiveMessage, MessageCode } from "@/stores/websocket/class";

export const useWebsocketStore = defineStore("websocket", () => {
  const message: Ref<UnwrapRef<LiveMessage>> = ref(new LiveMessage());
  const online: Ref<UnwrapRef<boolean>> = ref(false);
  const liveCount = ref(0);

  function setMessage(message1: LiveMessage) {
    switch (message1.code) {
      case MessageCode.LIVE_COUNT: {
        liveCount.value = message1.data.count;
        break;
      }
      default: {
        message.value = message1;
      }
    }
  }

  return { message, online, liveCount, setMessage };
});
