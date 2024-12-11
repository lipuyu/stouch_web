<template>
  <main>
    <p>this is a home page. online user count is {{ liveCount }}</p>
    <topic-component></topic-component>
    <topic-component></topic-component>
    <topic-component></topic-component>
  </main>
</template>

<script setup lang="ts">
import { useWebsocketStore } from "@/stores/websocket";
import { storeToRefs } from "pinia";
import TopicComponent from "@/components/topic/TopicComponent.vue";

const { liveCount } = storeToRefs(useWebsocketStore());
</script>
<style scoped>
main {
  border: darkgray 1px solid;
}
p {
  height: 32px;
}
</style>
