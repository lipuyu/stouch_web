<script setup lang="ts">
import UserAvatar from "@/components/user/UserAvatarComponent.vue";
import { ref } from "vue";

const text = ref("吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？" +
  "吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？");
</script>

<template>
  <div class="topic_com">
    <user-avatar :avatar="''" :userId="2"></user-avatar>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
</style>
