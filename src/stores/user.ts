import { ref, type Ref, type UnwrapRef } from "vue";
import { defineStore } from "pinia";

export class User {
  public id: number = 0;
  public username: string = "";
  public avatar: string = "";
  public gender: number = 0;
  public birthday: string = "";
}

export const useUserStore = defineStore("user", () => {
  const user: Ref<UnwrapRef<User>> = ref(new User());
  return { user };
});
