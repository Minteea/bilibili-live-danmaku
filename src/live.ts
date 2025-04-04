import { encoder, decoder, JoinPack, WSOperation } from "./buffer";
import { MessageData } from "./types";

export type LiveOptions = {
  protover?: 1 | 2 | 3;
  authBody?: any;
  uid?: number;
  key?: string;
  buvid?: string;
};

export class EventEvent<T> extends Event {
  event: Event;
  constructor(event: Event) {
    super("event");
    this.event = event;
  }
}

export interface DataEventInitDict<T> {
  data: T;
  operation?: number;
  protocol?: number;
}

export class DataEvent<T> extends Event {
  data: T;
  protocol?: number;
  operation?: number;
  constructor(
    type: string,
    { data, operation, protocol }: DataEventInitDict<T>
  ) {
    super(type);
    this.data = data;
    this.protocol = protocol;
    this.operation = operation;
  }
}

export class Live extends EventTarget {
  roomid: number;
  online: number;
  live: boolean;
  closed: boolean;
  timeout: number;

  send: (data: Uint8Array) => void;
  close: () => void;

  constructor(
    roomid: number,
    {
      send,
      close,
      protover = 3,
      key,
      authBody,
      uid = 0,
      buvid,
    }: { send: (data: Uint8Array) => void; close: () => void } & LiveOptions
  ) {
    if (typeof roomid !== "number" || Number.isNaN(roomid)) {
      throw new TypeError(`roomid ${roomid} must be Number not NaN`);
    }

    super();
    this.roomid = roomid;
    this.online = 0;
    this.live = false;
    this.closed = false;
    this.timeout = setTimeout(() => {}, 0);

    this.send = send;
    this.close = () => {
      this.closed = true;
      close();
    };

    this.addEventListener("message", async (e: MessageEvent) => {
      try {
        const buffer = new Uint8Array(
          await new Response(
            e.data as unknown as InstanceType<typeof Blob>
          ).arrayBuffer()
        );
        const packs = decoder(buffer);
        packs.forEach(({ data, protocol, operation }) => {
          if (operation === WSOperation.CONNECT_SUCCESS) {
            this.live = true;
            this.dispatchEvent(
              new DataEvent("CONNECT_SUCCESS", { data, protocol, operation })
            );
            this.send(encoder(WSOperation.HEARTBEAT));
          }
          if (operation === WSOperation.HEARTBEAT_REPLY) {
            this.online = data;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => this.heartbeat(), 1000 * 30);
            this.dispatchEvent(
              new DataEvent("HEARTBEAT_REPLY", { data, protocol, operation })
            );
          }
          if (operation === WSOperation.MESSAGE) {
            this.dispatchEvent(
              new DataEvent("MESSAGE", { data, protocol, operation })
            );
            const cmd = data.cmd || data.msg?.cmd;
            if (cmd) {
              this.dispatchEvent(
                new DataEvent(cmd, { data, protocol, operation })
              );
            }
          } else {
            new DataEvent("UNKNOWN", { data, protocol, operation });
          }
        });
      } catch (error) {
        this.dispatchEvent(new ErrorEvent("error:decode", { error }));
      }
    });

    this.addEventListener("open", () => {
      if (authBody) {
        if (typeof authBody === "object") {
          authBody = encoder(WSOperation.USER_AUTHENTICATION, authBody);
        }
        this.send(authBody);
      } else {
        const hi: JoinPack = {
          uid: uid,
          roomid,
          protover,
          platform: "web",
          type: 2,
          key,
          buvid,
        };
        const buf = encoder(WSOperation.USER_AUTHENTICATION, hi);
        this.send(buf);
      }
    });

    this.addEventListener("close", () => {
      clearTimeout(this.timeout);
    });
  }

  dispatchEvent(event: Event) {
    const result = super.dispatchEvent(event);
    super.dispatchEvent(new EventEvent(event));
    return result;
  }

  heartbeat() {
    this.send(encoder(WSOperation.HEARTBEAT));
  }

  getOnline() {
    this.heartbeat();
    return new Promise<number>((resolve) =>
      this.addEventListener("HEARTBEAT_REPLY", (e) => resolve(e.data))
    );
  }
}

export interface LiveEventMap extends WebSocketEventMap {
  /** 触发事件 */
  event: EventEvent<any>;
  /** 超时 */
  timeout: Event;
  /** 解码发生错误 */
  "error:decode": ErrorEvent;

  /** 连接 */
  CONNECT_SUCCESS: DataEvent<any>;
  /** 收到心跳包回复 */
  HEARTBEAT_REPLY: DataEvent<any>;
  /** 收到消息 */
  MESSAGE: DataEvent<MessageData>;

  /** 弹幕消息 */
  DANMU_MSG: DataEvent<MessageData.DANMU_MSG>;
  /** 互动消息 */
  INTERACT_WORD: DataEvent<MessageData.INTERACT_WORD>;
  /** 礼物消息 */
  SEND_GIFT: DataEvent<MessageData.SEND_GIFT>;
  /** 开通舰长 */
  GUARD_BUY: DataEvent<MessageData.GUARD_BUY>;
  /** SC消息 */
  SUPER_CHAT_MESSAGE: DataEvent<MessageData.SUPER_CHAT_MESSAGE>;
  /** 禁言 */
  ROOM_BLOCK_MSG: DataEvent<MessageData.ROOM_BLOCK_MSG>;

  /** 天选时刻抽奖 */
  ANCHOR_LOT_START: DataEvent<MessageData.ANCHOR_LOT_START>;

  /** 观看人数变化 */
  WATCHED_CHANGE: DataEvent<MessageData.WATCHED_CHANGE>;
  /** 点赞数变化 */
  LIKE_INFO_V3_UPDATE: DataEvent<MessageData.LIKE_INFO_V3_UPDATE>;
  /** 在线人数变化 */
  ONLINE_RANK_COUNT: DataEvent<MessageData.ONLINE_RANK_COUNT>;
  /** 房间信息变化 */
  ROOM_CHANGE: DataEvent<MessageData.ROOM_CHANGE>;

  /** 开播 */
  LIVE: DataEvent<MessageData.LIVE>;
  /** 直播被切断 */
  CUT_OFF: DataEvent<MessageData.CUT_OFF>;
  /** 下播 */
  PREPARING: DataEvent<MessageData.PREPARING>;
}

export interface Live {
  addEventListener<K extends keyof LiveEventMap>(
    type: K,
    listener: (ev: LiveEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;

  dispatchEvent<K extends keyof LiveEventMap>(event: LiveEventMap[K]): void;

  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}
