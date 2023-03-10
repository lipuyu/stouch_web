import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/login/LoginView.vue";
import { getTicket } from "@/libs/util";
import { useLastRouteStore } from "@/stores/lastRoute";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => AboutView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  const ticket: string = getTicket();
  const store = useLastRouteStore();
  if (ticket === "" && to.name !== "login") {
    store.lastRoute = to;
    return { name: "login" };
  } else if (ticket !== "" && to.name === "login") {
    return { name: "home" };
  }
});

export default router;
