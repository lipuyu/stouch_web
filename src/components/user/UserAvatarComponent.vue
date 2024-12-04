<template>
  <div class="user-avatar" :style="{ borderColor: online ? 'green' : 'gray' }">
    <img
      width="38"
      height="38"
      :src="avatar ? activeConfig.cdn + avatar : ''"
      alt="avatar"
      @error="loadError"
    />
    <div class="mask" v-show="!online"></div>
  </div>
</template>
<script setup lang="ts">
import defaultImg from "@/assets/default.png";
import { getActiveConf } from "@/libs/activeConfig";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useWebsocketStore } from "@/stores/websocket";
import { MessageCode } from "@/libs/websocket/class";
import type { LiveStatusMsg } from "./user.class";
import { foucsUser, unfoucsUser } from "@/components/user/api";

const props = defineProps<{
  avatar: string;
  userId: number;
}>();

const activeConfig = getActiveConf();
const online = ref<boolean>(false);
const { message } = storeToRefs(useWebsocketStore());

onMounted(async () => {
  foucsUser({ userId: props.userId }).then((res) => {
    online.value = res.data.status;
  });
});

onUnmounted(async () => {
  unfoucsUser({ userId: props.userId }).then(() => {});
});

watch(message, (newValue) => {
  if (newValue.code === MessageCode.LIVE_STATUS) {
    let liveStatusMsg: LiveStatusMsg = newValue.data;
    if (props.userId === liveStatusMsg.userId) {
      online.value = liveStatusMsg.status;
    }
  }
});

function loadError(e: any) {
  if (e.target.src !== defaultImg) {
    e.target.src = defaultImg;
  }
}
</script>

<style>
.user-avatar img {
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
}

.user-avatar {
  height: 44px;
  width: 44px;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  position: relative;
}

.user-avatar .mask {
  height: 40px;
  width: 40px;
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
}
</style>
