import { loadActiveConf } from "@/libs/activeConfig";
import { loadWebsocketNow } from "@/libs/websocket";
import { getCurrentUser } from "@/components/user/api";
import { useUserStore } from "@/stores/user";

/**
 * 预处理信息
 */
export default async function init() {
  // 加载配置
  await loadActiveConf();
  // 连接websocket并保活
  loadWebsocketNow();
  // 加载用户信息
  const userStore = useUserStore();
  if (userStore.user.id === 0) {
    getCurrentUser().then((res) => {
      if (res.status) {
        userStore.user = res.data.user;
      }
    });
  }
}
