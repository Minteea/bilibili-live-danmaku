import { encoder, decoder } from "./buffer";
import { LiveWS } from "./ws";

export type LiveOptions = {
  protover?: 1 | 2 | 3;
  key?: string;
  authBody?: any;
  uid?: number;
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
      const buffer = new Uint8Array(
        await new Response(
          e.data as unknown as InstanceType<typeof Blob>
        ).arrayBuffer()
      );
      const packs = await decoder(buffer);
      packs.forEach(({ type, data, protocol, operation }) => {
        if (type === "welcome") {
          this.live = true;
          this.dispatchEvent(
            new DataEvent("welcome", { data, protocol, operation })
          );
          this.send(encoder("heartbeat"));
        }
        if (type === "heartbeat") {
          this.online = data;
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => this.heartbeat(), 1000 * 30);
          this.dispatchEvent(
            new DataEvent("heartbeat", { data, protocol, operation })
          );
        }
        if (type === "message") {
          this.dispatchEvent(
            new DataEvent("msg", { data, protocol, operation })
          );
          const cmd = data.cmd || (data.msg && data.msg.cmd);
          if (cmd) {
            if (cmd.includes("DANMU_MSG")) {
              this.dispatchEvent(
                new DataEvent("DANMU_MSG", { data, protocol, operation })
              );
            } else {
              this.dispatchEvent(
                new DataEvent(cmd, { data, protocol, operation })
              );
            }
          }
        } else {
          new DataEvent("unknown", { data, protocol, operation });
        }
      });
    });

    this.addEventListener("open", () => {
      if (authBody) {
        if (typeof authBody === "object") {
          authBody = encoder("join", authBody);
        }
        this.send(authBody);
      } else {
        const hi: {
          uid: number;
          roomid: number;
          protover: number;
          platform: string;
          type: number;
          key?: string;
          buvid?: string;
        } = { uid: uid, roomid, protover, platform: "web", type: 2 };
        if (key) {
          hi.key = key;
        }
        if (buvid) {
          hi.buvid = buvid;
        }
        const buf = encoder("join", hi);
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
    this.send(encoder("heartbeat"));
  }

  getOnline() {
    this.heartbeat();
    return new Promise<number>((resolve) =>
      this.addEventListener("heartbeat", (e) => resolve(e.data))
    );
  }
}

export interface LiveEventMap extends WebSocketEventMap {
  event: EventEvent<any>;
  welcome: DataEvent<any>;
  heartbeat: DataEvent<any>;
  msg: DataEvent<any>;
  timeout: Event;
}

export interface Live {
  addEventListener<K extends keyof LiveEventMap>(
    type: K,
    listener: (ev: LiveEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener<T>(
    type: string,
    listener: (ev: DataEvent<T>) => any,
    options?: boolean | AddEventListenerOptions
  ): void;

  dispatchEvent<K extends keyof LiveEventMap>(event: LiveEventMap[K]): void;
  dispatchEvent<T>(event: DataEvent<T>): void;

  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}
