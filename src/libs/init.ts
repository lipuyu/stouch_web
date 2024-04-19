import { loadActiveConf } from "@/libs/activeConfig";
import { loadWebsocketNow } from "@/libs/websocket/websocket";
import { getCurrentUser } from "@/components/user/api";
import { useUserStore } from "@/stores/user";

/**
 * 预处理信息
 */
export default async function init() {
  // 加载配置
  await loadActiveConf();
  // 加载用户信息
  const userStore = useUserStore();
  if (userStore.user.id === 0) {
    const res: any = await getCurrentUser();
    if (res.status) {
      userStore.user = res.data.user;
      // 连接websocket并保活
    }
    loadWebsocketNow();
  }
}
