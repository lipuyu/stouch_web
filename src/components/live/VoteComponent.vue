<script setup lang="ts">
import type Vote from "./vote.class";
import { computed } from "vue";

const props = defineProps<{
  votes: Vote[];
}>();

const total = computed(() =>
  props.votes.map((x) => x.count).reduce((x, y) => x + y)
);

function getRate(count: number, total: number): string {
  if (total < 0) {
    return "0%";
  } else {
    return ((count * 100) / total).toFixed(2) + "%";
  }
}
</script>

<template>
  <div>
    <p v-for="vote in votes" :key="vote.id">
      {{ vote.desc }} {{ vote.count }} {{ getRate(vote.count, total) }}
    </p>
  </div>
</template>
