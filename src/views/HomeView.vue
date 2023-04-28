<script setup lang="ts">
import { useWebsocketStore } from "@/stores/websocket/websocket";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { keepLive, loadWebsocketNow } from "@/libs/websocket";
import UserAvatar from "@/components/user/UserAvatar.vue";
import { useUserStore } from "@/stores/user";
import { getCurrentUser } from "@/components/user/api";
import VoteComponent from "@/components/live/VoteComponent.vue";
import { loadActiveConf } from "@/libs/activeConfig";

const { online, liveCount } = storeToRefs(useWebsocketStore());
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
onMounted(() => {
  loadWebsocketNow();
  keepLive();
  if (userStore.user.id === 0) {
    getCurrentUser().then((res) => {
      if (res.status) {
        userStore.user = res.data.user;
      }
    });
  }
  loadActiveConf();
});
let votes = ref([
  { id: 1, desc: "投票1", count: 10 },
  { id: 1, desc: "投票2", count: 5 },
]);
</script>

<template>
  <main>
    <p>this is a home page. online user count is {{ liveCount }}</p>
    <user-avatar :avatar="user.avatar" :online="online"></user-avatar>
    <vote-component :votes="votes"></vote-component>
  </main>
</template>
