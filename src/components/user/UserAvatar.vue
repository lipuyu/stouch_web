<script setup lang="ts">
import defaultImg from "@/assets/default.png";
import { getActiveConf } from "@/libs/activeConfig";

const activeConfig = getActiveConf();

defineProps<{
  avatar: string;
  online: boolean;
}>();

function loadError(e: any) {
  if (e.target.src !== defaultImg) {
    e.target.src = defaultImg;
  }
}
</script>

<template>
  <div class="user-avatar" :style="{ borderColor: online ? 'green' : 'gray' }">
    <img
      width="48"
      height="48"
      :src="avatar ? activeConfig.cdn + avatar : ''"
      alt="avatar"
      @error="loadError"
    />
    <div class="mask" v-show="!online"></div>
  </div>
</template>

<style>
.user-avatar img {
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
}

.user-avatar {
  height: 52px;
  width: 52px;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  position: relative;
}

.user-avatar .mask {
  height: 48px;
  width: 48px;
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
}
</style>
