<script setup lang="ts">
import { useWebsocketStore } from "@/stores/websocket";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { loadWebsocketNow } from "@/libs/websocket";
const { online, liveCount } = storeToRefs(useWebsocketStore());
onMounted(() => {
  loadWebsocketNow();
});
</script>

<template>
  <main>
    <p :style="{ color: online ? 'green' : 'red'}">
      this is a home page. online user count is {{ liveCount }}
    </p>
  </main>
</template>
