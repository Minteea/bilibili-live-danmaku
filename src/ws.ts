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
    }: WSOptions = {},
  ) {
    const ws = new WebSocket(address);
    const send = (data: Uint8Array) => {
      if (ws.readyState === 1) {
        ws.send(data as Uint8Array<ArrayBuffer>);
      }
    };
    const close = () => this.ws.close();

    super(roomid, { send, close, ...options });

    ws.addEventListener("open", (e) =>
      this.dispatchEvent(new Event(e.type, e)),
    );
    ws.addEventListener("message", (e) =>
      this.dispatchEvent(new MessageEvent(e.type, e as any)),
    );
    ws.addEventListener("close", (e) =>
      this.dispatchEvent(new CloseEvent(e.type, e)),
    );
    ws.addEventListener("error", (e) => {
      this.close();
      this.dispatchEvent(new ErrorEvent(e.type, e));
    });

    this.ws = ws;
  }
}
