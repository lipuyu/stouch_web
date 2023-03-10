import { ref } from "vue";
import { defineStore } from "pinia";
import type { RouteLocationRaw } from "vue-router";
import type { Ref, UnwrapRef } from "vue";

export const useLastRouteStore = defineStore("last_route", () => {
  const lastRoute: Ref<UnwrapRef<RouteLocationRaw>> = ref({ name: "home" });
  return { lastRoute };
});
