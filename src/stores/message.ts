import { ref } from "vue";
import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", () => {
  const message = ref("");

  function pushMessage(messageIn: any) {
    message.value = messageIn
  }

  return { message, pushMessage };
});
