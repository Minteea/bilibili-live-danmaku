import { ResponseData } from "../types/request";
import { Cookies, getSetCookie } from "@floating-live/cookies";

function getError<T>(message: string, cause: T): Error {
  const error = new Error(message);
  (error as any).cause = cause;
  return error;
}

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.36";

const DANMAKU_SERVER_CONF_URL =
  "https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo";

/** API-当前登录用户信息 */
const UID_INIT_URL = "https://api.bilibili.com/x/web-interface/nav";

/** API-获取BUVID */
const BUVID_INIT_URL = "https://www.bilibili.com/";

const ROOM_INIT_URL =
  "https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom";

/** 自定义fetch设置 */
export interface FetchOptions {
  /** 自定义fetch函数(适用于请求中转等情况) */
  fetch?: (input: string, init?: RequestInit) => Promise<Response>;
  /** 用户代理字段 */
  userAgent?: string;
  /** cookie字段 */
  cookie?: string;
}

/** 自定义fetch */
export function customFetch(
  {
    fetch = globalThis.fetch,
    userAgent = USER_AGENT,
    cookie = "",
  }: FetchOptions = {},
  input: string | URL,
  init?: RequestInit
) {
  return fetch(input.toString(), {
    ...init,
    headers: {
      Cookie: cookie,
      "User-Agent": userAgent,
      ...init?.headers,
    },
  });
}

/** 获取必要cookie
 * @returns 含有 `buvid3` `buvid4` 字段的cookie */
export async function requestBuvidCookie(
  options?: FetchOptions
): Promise<Record<"buvid3" | "buvid4", string>> {
  const res = await customFetch(options, BUVID_INIT_URL, {});
  if (!res.ok) {
    throw getError("Response Error", res);
  }
  return getSetCookie(res.headers);
}

/** 获取房间信息 */
export async function requestGetInfoByRoom(
  id: number,
  options?: FetchOptions
): Promise<ResponseData.GetInfoByRoom> {
  const res = await customFetch(options, `${ROOM_INIT_URL}?room_id=${id}`, {
    method: "GET",
  });
  if (!res.ok) {
    throw getError("Response Error", res);
  }
  const data = await res.json();
  if (data.code == 0) {
    return data.data;
  } else throw getError("Response Data Error", data);
}

/** 获取登录用户的uid */
export async function getLoginUid(options?: FetchOptions): Promise<number> {
  const res = await customFetch(options, UID_INIT_URL);
  if (!res.ok) {
    throw getError("Response Error", res);
  }
  const data = await res.json();
  if (data.code == 0) {
    return data.data.mid;
  } else if (data.code == -101) {
    // code = -101 => 账号未登录
    return 0;
  } else throw getError("Response Data Error", data);
}

/** 获取直播间连接配置 */
export const getLiveConfig = async (roomid: number, options?: FetchOptions) => {
  const res = await customFetch(
    options,
    `${DANMAKU_SERVER_CONF_URL}?id=${roomid}`
  );
  if (!res.ok) {
    throw getError("Response Error", res);
  }
  const data =
    (await res.json()) as ResponseData.Wrap<ResponseData.GetDanmuInfo>;
  if (data.code != 0) {
    throw getError("Response Data Error", data);
  }
  const {
    data: {
      token: key,
      host_list: [{ host }],
    },
  } = data;
  const address = `wss://${host}/sub`;
  return { key, host, address, raw: data };
};

/** 获取roomid */
export const getRoomid = async (short: number) => {
  const res = await fetch(
    `https://api.live.bilibili.com/room/v1/Room/mobileRoomInit?id=${short}`
  );
  if (!res.ok) {
    throw getError("Response Error", res);
  }
  const data = await res.json();
  if (data.code == 0) {
    return data.data.room_id;
  } else throw getError("Response Data Error", data);
};
