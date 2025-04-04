import { LiveOptions, Live, LiveEventMap, DataEvent } from "./live";
import { ErrorEvent, CloseEvent } from "./ponyfill/event";

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

    ws.addEventListener("open", (e) =>
      this.dispatchEvent(new Event(e.type, e))
    );
    ws.addEventListener("message", (e) =>
      this.dispatchEvent(new MessageEvent(e.type, e as any))
    );
    ws.addEventListener("close", (e) =>
      this.dispatchEvent(new CloseEvent(e.type, e))
    );
    ws.addEventListener("error", (e) => {
      this.close();
      this.dispatchEvent(new ErrorEvent(e.type, e));
    });

    this.ws = ws;
  }
}

/** @deprecated */
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
      const event = e.event;
      if (event instanceof DataEvent) {
        this.dispatchEvent(new DataEvent(event.type, event));
      } else if (event instanceof MessageEvent) {
        this.dispatchEvent(new MessageEvent(event.type, event as any));
      } else if (event instanceof CloseEvent) {
        this.dispatchEvent(new CloseEvent(event.type, event));
      } else if (event instanceof ErrorEvent) {
        this.dispatchEvent(new ErrorEvent(event.type, event));
      } else {
        this.dispatchEvent(new Event(event.type, event));
      }
    });

    connection.addEventListener("close", () => {
      if (!this.closed) {
        setTimeout(() => this.connect(), this.interval);
      }
      clearTimeout(timeout);
    });

    connection.addEventListener("HEARTBEAT_REPLY", () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        connection.close();
        connection.dispatchEvent(new Event("timeout"));
      }, this.timeout);
    });
  }

  get ws() {
    return this.connection.ws;
  }

  get connected() {
    return this.connection.connected;
  }

  close() {
    this.closed = true;
    this.connection.close();
  }

  heartbeat() {
    return this.connection.heartbeat();
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

  dispatchEvent<K extends keyof LiveEventMap>(event: LiveEventMap[K]): boolean;

  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}
