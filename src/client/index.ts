import { Cookies } from "@floating-live/cookies";
import {
  DataApiGenWebTicket,
  DataXliveGetInfoByRoom,
  DataXliveGetRoomBaseInfo,
  ResponseDataRoot,
} from "./types";
import { hmacSHA256 } from "./utils/crypto";
import { getWbiUrl } from "./utils/wbi";
import {
  fpGet,
  FpInfo,
  generateFakeFpInfo,
  generateRandomPngBase64,
  getExClimbWuzhiPayload,
} from "./utils/fingerprint";
import { generateUuid } from "./utils/algorithm/uuid";
import { generateLsid } from "./utils/algorithm/lsid";
import { x64hash128 } from "./utils/algorithm/murmur3";
export * from "./types";

const DEFAULT_USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.36";

export interface ClientInit {
  cookie?: string | Iterable<[string, string]> | Record<string, string>;
  userAgent?: string;
  fetch?: (input: string | URL, init?: RequestInit) => Promise<Response>;
}

export class Client {
  cookies: Cookies;
  userAgent: string;
  fetch: (input: string | URL, init?: RequestInit) => Promise<Response>;

  get cookie() {
    return this.cookies.toString();
  }

  constructor(options?: ClientInit) {
    const { cookie, userAgent, fetch } = options || {};
    this.cookies = new Cookies(cookie);
    this.userAgent = userAgent || DEFAULT_USER_AGENT;
    this.fetch = fetch || globalThis.fetch;
  }

  request(input: string | URL, init?: RequestInit) {
    return this.fetch(input.toString(), {
      ...init,
      headers: {
        Cookie: this.cookie,
        "User-Agent": this.userAgent,
        ...init?.headers,
      },
    });
  }

  setCookie(
    cookie: string | Iterable<[string, string]> | Record<string, string>
  ) {
    this.cookies = new Cookies(cookie);
  }
}

export interface RequestErrorInit {
  ok: boolean;
  code: number;
  message: string;
}

export class RequestError extends Error {
  ok: boolean;
  code: number;
  constructor({ ok, code, message }: RequestErrorInit) {
    super(message);
    this.ok = ok;
    this.code = code;
  }
}

export async function unwrapRequestData<T = any>(
  res: Response
): Promise<ResponseDataRoot<T>> {
  assertRequestOk(res);
  const resJson: ResponseDataRoot<T> = await res.json();
  if (resJson.code != 0) {
    throw new RequestError({
      ok: true,
      code: resJson.code,
      message: resJson.message,
    });
  }
  return resJson;
}

export async function assertRequestOk(res: Response) {
  if (!res.ok) {
    throw new RequestError({
      ok: false,
      code: res.status,
      message: res.statusText,
    });
  }
  return res;
}

export class BilibiliApiClient extends Client {
  constructor(options?: ClientInit) {
    super(options);
  }
  /** 获取直播间信息 */
  async xliveGetInfoByRoom(params: { room_id: number }) {
    const url = new URL(
      "https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom"
    );
    url.searchParams.set("room_id", params.room_id.toString());
    const res = await this.request(url, {
      method: "GET",
    });
    return unwrapRequestData<DataXliveGetInfoByRoom>(res);
  }

  /** 访问主页(获取必要cookie) */
  async wwwBilibili() {
    const res = await this.request("https://www.bilibili.com/");
    assertRequestOk(res);
    console.log(res.headers);
    this.cookies.setFromHeaders(res.headers);
  }

  /** 获取直播间基本信息 */
  async xliveGetRoomBaseInfo(params: { room_ids: number[]; req_biz?: string }) {
    const url = new URL(
      "https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo"
    );
    url.search = params.room_ids.map((r) => `room_ids=${r}`).join("&");
    url.searchParams.set("req_biz", params.req_biz || "video");
    const res = await this.request(url, {
      method: "GET",
    });
    return unwrapRequestData<DataXliveGetRoomBaseInfo>(res);
  }

  /** 获取房间页初始化信息 */
  async liveRoomInit(params: { id: number }) {
    const url = new URL("https://api.live.bilibili.com/room/v1/Room/room_init");
    url.searchParams.set("id", params.id.toString());
    const res = await this.request(url, {
      method: "GET",
    });
    return unwrapRequestData<any>(res);
  }

  /** 获取直播间主播信息 */
  async liveUserGetAnchorInRoom(params: { roomid: number }) {
    const url = new URL(
      "https://api.live.bilibili.com/live_user/v1/UserInfo/get_anchor_in_room"
    );
    url.searchParams.set("roomid", params.roomid.toString());
    const res = await this.request(url, {
      method: "GET",
    });
    return unwrapRequestData<any>(res);
  }

  /** 获取信息流认证秘钥 */
  async xliveGetDanmuInfo(params: { id: number }) {
    const url = new URL(
      "https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo"
    );
    url.searchParams.set("id", params.id.toString());
    const res = await this.request(await this.wbiSign(url), {
      method: "GET",
    });
    return unwrapRequestData<any>(res);
  }

  async apiGenWebTicket() {
    const timestamp = Math.floor(Date.now() / 1000);
    const hexsign = await hmacSHA256(`ts${timestamp}`, "XgwSnGZ1p");
    const url = new URL(
      "https://api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket"
    );
    const csrf = this.cookies.get("bili_jct");
    url.searchParams.set("key_id", "ec02");
    url.searchParams.set("hexsign", hexsign);
    url.searchParams.set("context[ts]", timestamp.toString());
    csrf && url.searchParams.set("csrf", csrf);
    const res = await this.request(url, { method: "POST" });
    return unwrapRequestData<DataApiGenWebTicket>(res);
  }

  async xapiSpi() {
    const res = await this.request(
      "https://api.bilibili.com/x/frontend/finger/spi"
    );
    return unwrapRequestData<Record<"b_3" | "b_4", string>>(res);
  }

  async xapiExClimbWuzhi(data: { payload: string }) {
    const res = await this.request(
      "https://api.bilibili.com/x/internal/gaia-gateway/ExClimbWuzhi",
      {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Accept-Language": "zh-CN,zh;q=0.9",
          "Content-Type": "application/json;charset=UTF-8",
          Origin: "https://www.bilibili.com",
          priority: "u=1, i",
          Referer: "https://www.bilibili.com/",
          "Sec-Ch-Ua": `"Microsoft Edge";v="135", "Not-A.Brand";v="8", "Chromium";v="135"`,
          "Sec-Ch-Mobile": "?0",
          "Sec-Ch-Platform": `"Windows"`,
          "Sec-Ch-Dest": "empty",
          "Sec-Ch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
        },
      }
    );
    return unwrapRequestData<unknown>(res);
  }

  /** 激活buvid */
  async activateBuvid(fp?: FpInfo) {
    const spiRes = (await this.xapiSpi()).data;
    console.log(spiRes);
    const { b_4 } = spiRes;
    this.cookies.set("buvid4", encodeURIComponent(b_4));

    // 生成虚拟指纹信息
    if (!fp) {
      fp = generateFakeFpInfo({
        canvas: generateRandomPngBase64(),
        webgl: generateRandomPngBase64(),
        userAgent: this.userAgent,
        platform: "Win32",
      });
    }

    // 获取指纹相关cookie字段
    if (!this.cookies.get("_uuid")) {
      this.cookies.set("_uuid", generateUuid());
    }
    if (!this.cookies.get("buvid_fp")) {
      const fpString = fp
        .map((e) => {
          return e.value;
        })
        .join("");
      this.cookies.set("buvid_fp", x64hash128(fpString, 31));
    }
    if (!this.cookies.get("b_lsid")) {
      this.cookies.set("b_lsid", generateLsid());
    }

    // 生成请求payload
    const payload = getExClimbWuzhiPayload(fp, {
      uuid: this.cookies.get("_uuid"),
      timestamp: Date.now().toString(),
      browser_resolution: fpGet(fp, "availableScreenResolution").join("x"),
      abtest: `{"b_ut":null,"home_version":"V8","in_new_ab":true,"ab_version":{"for_ai_home_version":"V8","enable_web_push":"DISABLE","ad_style_version":"NEW","enable_feed_channel":"ENABLE","enable_ai_floor_api":"DISABLE"},"ab_split_num":{"for_ai_home_version":54,"enable_web_push":10,"ad_style_version":54,"enable_feed_channel":54,"enable_ai_floor_api":137},"uniq_page_id":"${Math.floor(
        Math.random() * 2000000000000
      )}","is_modern":true}`,
    });

    // 激活buvid
    const res = await this.xapiExClimbWuzhi({
      payload: JSON.stringify(payload),
    });
    return res;
  }

  /** wbi签名 */
  async wbiSign(url: string): Promise<string>;
  async wbiSign(url: URL): Promise<URL>;
  async wbiSign(url: string | URL): Promise<string | URL> {
    const extractImageId = (p: string) =>
      p.split("/").at(-1)?.split(".")[0] || "";
    const webTicket = (await this.apiGenWebTicket()).data;
    const subUrl = webTicket.nav.sub;
    const imgUrl = webTicket.nav.img;
    const imgKey = extractImageId(imgUrl);
    const subKey = extractImageId(subUrl);
    return getWbiUrl(url as any, imgKey, subKey);
  }

  /** 初始化必要cookie */
  async initCookie() {
    await this.wwwBilibili();
    const webTicket = (await this.apiGenWebTicket()).data;

    this.cookies.set("bili_ticket", webTicket.ticket);
    this.cookies.set(
      "bili_ticket_expires",
      (webTicket.created_at + webTicket.ttl).toString()
    );
    this.cookies.set("enable_web_push", "DISABLE");

    await this.activateBuvid();
  }
}
