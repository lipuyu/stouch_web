<script setup lang="ts">
import UserAvatar from "@/components/user/UserAvatarComponent.vue";
import { ref } from "vue";
import { getBeautifyTime } from "@/libs/util";

const text = ref(
  "吃面不加蛋是否违规？吃面不加蛋是否违规？？吃面不加蛋是否违规？" +
    "吃面不加蛋是否违规？？吃面不加蛋是否违规？吃面不加蛋是否违规？" +
    "吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？" +
    "吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？" +
    "吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？" +
    "吃面不加蛋是否违规？吃面不加蛋是否违规？吃面不加蛋是否违规？"
);
</script>

<template>
  <hr />
  <div class="topic-com">
    <div>
      <user-avatar class="avatar" :avatar="''" :userId="2"></user-avatar>
    </div>
    <div>
      <div class="user-message">
        <strong>话茬用户</strong>
        <small>·{{ getBeautifyTime(Date.now() - 3600 * 1000 * 3) }}</small>
      </div>
      <div class="content">
        <p>{{ text }}</p>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topic-com {
  display: grid;
  grid-template-columns: 54px 1fr;
  margin-top: 9px;
  margin-bottom: 11px;
}

.topic-com .user-message {
  font-size: 14px;
  height: 22px;
}

.topic-com .content p + p {
  margin-top: 11px;
}

.topic-com .avatar {
  margin: auto;
}

/*.topic_com .content {*/
/*  border-width: 1px;*/
/*  border-style: solid;*/
/*  border-radius: 3px;*/
/*  margin-top: 3px;*/
/*}*/
</style>
