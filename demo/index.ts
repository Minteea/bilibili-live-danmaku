import { BilibiliApiClient, LiveWS, parseLiveConfig, WSOptions } from "../src";

try {
  const dotenv = await import("dotenv");
  dotenv.config().parsed;
} catch (e) {
  console.warn("不支持dotenv");
}

function getEnv(key: string) {
  return (
    globalThis.process?.env?.[key] ||
    globalThis.Deno?.env?.get(key) ||
    undefined
  );
}

const roomid = 26815357;

// 设置 cookie
// 在根目录创建一个 .env 文件，内容为 API_CLIENT_COOKIE="xxxxxx" 即可设置cookie
// 注：用户未登录的情况下，弹幕用户名会被打码。设置已登录用户的cookie可解除限制。注意不要将cookie泄露给他人
const cookie = getEnv("API_CLIENT_COOKIE") || "";

/** 创建api客户端，以便模拟B站请求 */
const apiClient = new BilibiliApiClient({
  cookie,
});

// 访问主页，获取必要cookie
if (!apiClient.cookies.get("buvid3")) await apiClient.wwwBilibili();

// 获取ws配置
const config: WSOptions = parseLiveConfig(
  (await apiClient.xliveGetDanmuInfo({ id: roomid })).data
);
config.buvid = apiClient.cookies.get("buvid3");
config.uid = Number.parseInt(apiClient.cookies.get("DedeUserID")) || 0;

const live = new LiveWS(roomid, config);

live.addEventListener("open", () => {
  console.log("已连接上直播服务器");
});

live.addEventListener("CONNECT_SUCCESS", () => {
  console.log("已连接上直播间");
});

live.addEventListener("MESSAGE", ({ data }) => {
  // 获得直播消息
  console.log(data);
});

live.addEventListener("error", (e) => {
  console.log("连接发生错误");
  console.log(e);
});

live.addEventListener("close", (e) => {
  console.log("已关闭与服务器的连接");
});
