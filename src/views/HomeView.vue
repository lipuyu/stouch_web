<script setup lang="ts">
import { useWebsocketStore } from "@/stores/websocket/websocket";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { keepLive, loadWebsocketNow } from "@/libs/websocket";
import UserComponent from "@/components/user/UserComponent.vue";
const { online, liveCount } = storeToRefs(useWebsocketStore());
onMounted(() => {
  loadWebsocketNow();
  keepLive();
});
</script>

<template>
  <main>
    <p :style="{ color: online ? 'green' : 'red' }">
      this is a home page. online user count is {{ liveCount }}
    </p>
    <user-component></user-component>
  </main>
</template>
