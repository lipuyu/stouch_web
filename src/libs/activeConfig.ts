import axios from "@/libs/api.request";

const key: string = "activeConfig";

export async function loadActiveConf() {
  const activeConfString = localStorage.getItem(key);
  if (
    !activeConfString ||
    JSON.parse(activeConfString).expireTime < Math.floor(Date.now() / 1000)
  ) {
    const res = await axios.get("/appconf");
    localStorage.setItem(key, JSON.stringify(res.data));
  }
}

export function getActiveConf(): any {
  const activeConfString = localStorage.getItem(key);
  if (activeConfString) {
    return JSON.parse(activeConfString);
  }
  return {};
}

export function removeActiveConf() {
  localStorage.removeItem(key);
}
