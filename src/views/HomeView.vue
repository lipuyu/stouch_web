<script setup lang="ts">
import { useWebsocketStore } from "@/stores/websocket";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import UserAvatar from "@/components/user/UserAvatar.vue";
import { useUserStore } from "@/stores/user";
import VoteComponent from "@/components/live/VoteComponent.vue";
import BubbleChat from "@/views/bubbleChat/BubbleChat.vue";

const { online, liveCount } = storeToRefs(useWebsocketStore());
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
let votes = ref([
  { id: 1, desc: "投票1", count: 10 },
  { id: 1, desc: "投票2", count: 5 },
]);

const click = () => {
  let a: string = "hello world!!!";
  console.log(a);
};
</script>

<template>
  <main>
    <p>this is a home page. online user count is {{ liveCount }}</p>
    <user-avatar :avatar="user.avatar" :online="online"></user-avatar>
    <vote-component :votes="votes"></vote-component>
    <bubble-chat></bubble-chat>
    <button @click="click">点一下</button>
  </main>
</template>
