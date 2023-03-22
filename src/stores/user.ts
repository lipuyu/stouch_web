import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(0);
  const doubleCount = computed(() => user.value * 2);

  function increment() {
    user.value++;
  }

  return { user, doubleCount, increment };
});
