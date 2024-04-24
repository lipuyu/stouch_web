<script setup lang="ts">
import { useWebsocketStore } from "@/stores/websocket";
import { storeToRefs } from "pinia";
import TopicComponent from "@/components/topic/TopicComponent.vue";

const { liveCount } = storeToRefs(useWebsocketStore());
</script>

<template>
  <main>
    <p>this is a home page. online user count is {{ liveCount }}</p>
    <topic-component></topic-component>
  </main>
</template>
