import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { keepLive } from "@/libs/websocket";
import { setApp } from "@/libs/util";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");

setApp();
keepLive();
