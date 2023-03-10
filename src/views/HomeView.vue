<script setup lang="ts">
import { useWebsocketStore } from "@/stores/websocket";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { loadWebsocketNow } from "@/libs/websocket";
const { online, message } = storeToRefs(useWebsocketStore());
onMounted(() => {
  loadWebsocketNow();
});
</script>

<template>
  <main>
    <p :style="{ color: online ? 'green' : 'red'}">this is a home page. {{ message }}</p>
  </main>
</template>
