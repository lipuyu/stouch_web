import { type Ref, ref, type UnwrapRef } from "vue";
import { defineStore } from "pinia";

export const useWebsocketStore = defineStore("websocket", () => {
  const message: Ref<UnwrapRef<object>> = ref({});
  const online: Ref<UnwrapRef<boolean>> = ref(false);
  return { message, online };
});
