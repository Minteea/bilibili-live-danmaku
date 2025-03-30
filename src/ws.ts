import { LiveOptions, Live, LiveEventMap, DataEvent } from "./live";

export type WSOptions = LiveOptions & { address?: string };

export class LiveWS extends Live {
  ws: WebSocket;
  constructor(
    roomid: number,
    {
      address = "wss://broadcastlv.chat.bilibili.com/sub",
      ...options
    }: WSOptions = {}
  ) {
    const ws = new WebSocket(address);
    const send = (data: Uint8Array) => {
      if (ws.readyState === 1) {
        ws.send(data);
      }
    };
    const close = () => this.ws.close();

    super(roomid, { send, close, ...options });

    ws.addEventListener("open", (e) => this.dispatchEvent(e));
    ws.addEventListener("message", (e) => this.dispatchEvent(e));
    ws.addEventListener("close", (e) => this.dispatchEvent(e));
    ws.addEventListener("error", (e) => {
      this.close();
      this.dispatchEvent(e);
    });

    this.ws = ws;
  }
}

export class KeepLiveWS extends EventTarget implements LiveWS {
  readonly roomid: number;
  readonly options: WSOptions;
  closed: boolean;
  interval: number;
  timeout: number;
  connection: LiveWS;

  constructor(roomid: number, options: WSOptions = {}) {
    super();
    this.roomid = roomid;
    this.options = options;
    this.closed = false;
    this.interval = 100;
    this.timeout = 45 * 1000;
    this.connection = new LiveWS(roomid, options);
    this.connect(false);
  }

  connect(reconnect = true) {
    if (reconnect) {
      this.connection.close();
      this.connection = new LiveWS(this.roomid, this.options);
    }
    const connection = this.connection;

    let timeout = setTimeout(() => {
      connection.close();
      connection.dispatchEvent(new Event("timeout"));
    }, this.timeout);

    connection.addEventListener("event", (e) => {
      this.dispatchEvent(e.event);
    });

    connection.addEventListener("close", () => {
      if (!this.closed) {
        setTimeout(() => this.connect(), this.interval);
      }
    });

    connection.addEventListener("heartbeat", () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        connection.close();
        connection.dispatchEvent(new Event("timeout"));
      }, this.timeout);
    });

    connection.addEventListener("close", () => {
      clearTimeout(timeout);
    });
  }

  get online() {
    return this.connection.online;
  }

  get ws() {
    return this.connection.ws;
  }

  get live() {
    return this.connection.live;
  }

  close() {
    this.closed = true;
    this.connection.close();
  }

  heartbeat() {
    return this.connection.heartbeat();
  }

  getOnline() {
    return this.connection.getOnline();
  }

  send(data: Uint8Array) {
    return this.connection.send(data);
  }
}

export interface KeepLiveWS {
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

  dispatchEvent<K extends keyof LiveEventMap>(event: LiveEventMap[K]): boolean;
  dispatchEvent<T>(event: DataEvent<T>): boolean;

  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}
