import {
  getLiveConfig,
  getLoginUid,
  LiveWS,
  requestBuvidCookie,
  requestGetInfoByRoom,
  WSOptions,
} from "../src";
import { Cookies } from "../src/utils/cookie";

const roomid = 22603245;

// 注：用户未登录的情况下，弹幕用户名会被打码。设置已登录用户的cookie可解除限制。注意不要将cookie泄露给他人
const cookie = "";

const cookies = new Cookies(cookie);

if (!cookies.get("buvid3")) cookies.append(await requestBuvidCookie());
const config: WSOptions = await getLiveConfig(roomid, {
  cookie: cookies.toString(),
});
config.buvid = cookies.get("buvid3");
config.uid = await getLoginUid({ cookie: cookies.toString() });

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
