<script setup lang="ts">
import { useWebsocketStore } from "@/stores/websocket/websocket";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { keepLive, loadWebsocketNow } from "@/libs/websocket";
import UserAvatar from "@/components/user/UserAvatar.vue";
import { useUserStore } from "@/stores/user";
import { getCurrentUser } from "@/components/user/api";
import { useConfStore } from "@/stores/activeConfig";

const { online, liveCount } = storeToRefs(useWebsocketStore());
const { loadActiveConf } = useConfStore();
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
</script>

<template>
  <main>
    <p>
      this is a home page. online user count is {{ liveCount }}
    </p>
    <user-avatar :avatar="user.avatar" :online="online"></user-avatar>
  </main>
</template>
