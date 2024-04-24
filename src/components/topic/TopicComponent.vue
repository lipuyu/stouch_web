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
        <strong>话茬用户</strong>
      </div>
      <div>
        <p><strong>话茬用户</strong>话茬用户{{ text }}</p>
        <p>
          ... the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he begs:
          <strong>never feed him after midnight</strong>.
        </p>
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
