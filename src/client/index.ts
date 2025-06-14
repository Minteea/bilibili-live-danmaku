import { Cookies } from "@floating-live/cookies";
import {
  DataApiGenWebTicket,
  DataXliveGetInfoByRoom,
  ResponseDataRoot,
} from "./types";
import { hmacSHA256 } from "./utils/crypto";
import { getWbiUrl } from "./utils/wbi";
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

export class NotImplementedError extends Error {
  constructor() {
    super("Function not implemented.");
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

  async xliveGetRoomBaseInfo(params: { room_ids: number[]; req_biz?: string }) {
    const url = new URL("https://api.live.bilibili.com/room/v1/Room/room_init");
    url.search = params.room_ids.map((r) => `room_ids=${r}`).join("&");
    url.searchParams.set("req_biz", params.req_biz || "video");
    const res = await this.request(url, {
      method: "GET",
    });
    return unwrapRequestData<any>(res);
  }
  async liveRoomGetInfo() {}

  /** 获取房间页初始化信息 */
  async liveRoomInit(params: { id: number }) {
    const url = new URL("https://api.live.bilibili.com/room/v1/Room/room_init");
    url.searchParams.set("id", params.id.toString());
    const res = await this.request(url, {
      method: "GET",
    });
    return unwrapRequestData<any>(res);
  }

  async xliveGetRoomPlayInfo() {
    throw new NotImplementedError();
  }

  async wwwCorrespond() {
    throw new NotImplementedError();
  }
  async wwwLive() {
    throw new NotImplementedError();
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

  async liveRoomPlayInfo() {
    throw new NotImplementedError();
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
    const data = await this.request(url, { method: "POST" }).then((r) =>
      r.json()
    );
    return data.data as DataApiGenWebTicket;
  }

  /** wbi签名 */
  async wbiSign(url: string): Promise<string>;
  async wbiSign(url: URL): Promise<URL>;
  async wbiSign(url: string | URL): Promise<string | URL> {
    const extractImageId = (p: string) =>
      p.split("/").at(-1)?.split(".")[0] || "";
    const webTicket = await this.apiGenWebTicket();
    const subUrl = webTicket.nav.sub;
    const imgUrl = webTicket.nav.img;
    const imgKey = extractImageId(imgUrl);
    const subKey = extractImageId(subUrl);
    return getWbiUrl(url as any, imgKey, subKey);
  }

  async xapiFingerSpi() {
    throw new NotImplementedError();
  }

  async xapiGetbuvid() {
    throw new NotImplementedError();
  }
}
