<script setup lang="ts">
import UserAvatar from "@/components/user/UserAvatarComponent.vue";
import { ref } from "vue";

const text = ref("吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？" +
  "吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？" +
  "吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？" +
  "吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？");
</script>

<template>
  <div class="topic_com">
    <div>
      <user-avatar :avatar="''" :userId="2"></user-avatar>
    </div>
    <div>
      <div>
        话茬用户
      </div>
      <div>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topic_com {
  display: grid;
  grid-template-columns: 54px 1fr;
}
</style>
