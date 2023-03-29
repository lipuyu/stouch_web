import axios from "@/libs/api.request";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useConfStore = defineStore("counter", () => {
  const activeConfig = ref({});

  function loadActiveConf() {
    axios.get("/appconf").then(res => {
      activeConfig.value = res.data;
    });
  }

  return { activeConfig, loadActiveConf };
});
