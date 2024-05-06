<script setup lang="ts">
import { ref } from "vue";

let arr = ref<any>([]);
for (let i = 1; i < 31; i++) {
  arr.value.push(i);
}

const weeks: string[] = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
</script>

<template>
  <div class="calendar-view">
    <div v-for="week in weeks" :key="week" class="week">
      {{ week }}
    </div>
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
    <div v-for="item in arr" :key="item" class="day">
      {{ item }}
    </div>
    <div class="day"></div>
    <div class="day"></div>
  </div>
</template>

<style scoped>
.calendar-view {
  width: 800px;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 10px;
  margin-bottom: 10px;
}

.calendar-view .day {
  border-width: 2px;
  border-color: aquamarine;
  border-style: solid;
}

.calendar-view .week {
  border-width: 2px;
  border-color: #181818;
  border-style: solid;
}
</style>
