<template>
  <div>
    <form>
      <ul>
        <li>
          <label>用户名:</label>
          <input type="text" v-model="loginForm.username" />
        </li>
        <li>
          <label>密码:</label>
          <input type="password" v-model="loginForm.password" />
        </li>
        <li>
          <button @click="login">登录</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script setup lang="ts">
import { signIn } from "@/views/login/api";
import { LoginForm } from "@/views/login/class";
import { setTicket } from "@/libs/util";
import { useLastRouteStore } from "@/stores/lastRoute";
import router from "@/router";

let loginForm: LoginForm = new LoginForm();
const login = () => {
  signIn(loginForm)
    .then((res) => {
      if (res.status) {
        setTicket(res.data.ticket);
        console.log(res.data.ticket);
        const { lastRoute } = useLastRouteStore();
        router.push(lastRoute);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style>
@media (min-width: 1024px) {
}
</style>
