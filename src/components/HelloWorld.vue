<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { count, doubleCount } = storeToRefs(store);
const { increment } = store;
increment();

class Person {
  public age: number;
  public name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }
}

defineProps<{
  msg: string
}>();
const person = new Person(12, "佩奇");
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }} {{ person.age }} - {{ person.name }} - {{ count + doubleCount }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
