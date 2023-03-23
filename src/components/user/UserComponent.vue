<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { getCurrentUser } from "@/components/user/api";
const store = useUserStore();
const { user } = storeToRefs(store);
onMounted(() => {
  if (store.user.id === 0) {
    getCurrentUser().then((res) => {
      if (res.status) {
        store.user = res.data.user;
      }
    });
  }
});
</script>

<template>
  <main>
    <p>
      {{ user.avatar }}
    </p>
  </main>
</template>
