<script setup lang="ts">
import { useConfStore } from "@/stores/activeConfig";
import { storeToRefs } from "pinia";

const { activeConfig } = storeToRefs(useConfStore());

defineProps<{
  avatar: string;
  online: boolean;
}>();
</script>

<template>
  <div class="avatar" :style="{ borderColor: online ? 'green' : 'gray' }">
    <img
      width="48"
      height="48"
      :src="activeConfig.cdn + avatar"
      alt="avatar"
    />
    <div class="mask" v-show="!online"></div>
  </div>
</template>

<style>
img {
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  /*filter: grayscale(100%);*/
}

.avatar {
  height: 52px;
  width: 52px;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  position: relative;
}

.mask {
  height: 48px;
  width: 48px;
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
}
</style>
