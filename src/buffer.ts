import "array-flat-polyfill";
import { inflate } from "pako";
import { brotliDecompress } from "./inflate";

// https://github.com/lovelyyoshino/Bilibili-Live-API/blob/master/API.WebSocket.md

const cutBuffer = (buffer: Uint8Array) => {
  const bufferPacks: Uint8Array[] = [];
  const view = new DataView(
    buffer.buffer,
    buffer.byteOffset,
    buffer.byteLength
  );
  let size: number;
  for (let i = 0; i < buffer.length; i += size) {
    size = view.getInt32(i);
    bufferPacks.push(buffer.slice(i, i + size));
  }
  return bufferPacks;
};

type EnumValue<T> = T[keyof T];

export const MessageOperation = {
  heartbeat: 3,
  message: 5,
  welcome: 8,
} as const;

export type MessageOperation = EnumValue<typeof MessageOperation>;

export const decoder = async (buffer: Uint8Array) => {
  const packs = await Promise.all(
    cutBuffer(buffer).map(async (buf) => {
      const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
      const body = buf.slice(16);
      const protocol = view.getInt16(6);
      const operation = view.getInt32(8);

      let type = "unknown";
      if (operation === MessageOperation.heartbeat) {
        type = "heartbeat";
      } else if (operation === MessageOperation.message) {
        type = "message";
      } else if (operation === MessageOperation.welcome) {
        type = "welcome";
      }

      let data: any;
      if (protocol === 0) {
        data = JSON.parse(String(body));
      }
      if (protocol === 1 && body.length === 4) {
        const bodyView = new DataView(
          body.buffer,
          body.byteOffset,
          body.byteLength
        );
        data = bodyView.getUint32(0);
      }
      if (protocol === 2) {
        data = await decoder(inflate(body));
      }
      if (protocol === 3) {
        data = await decoder(brotliDecompress(body));
      }

      return { buf, type, protocol, data, operation };
    })
  );

  return packs.flatMap((pack) => {
    if (pack.protocol === 2 || pack.protocol === 3) {
      return pack.data as typeof packs;
    }
    return pack;
  });
};

type EncodeType = "heartbeat" | "join";

export const encoder = (type: EncodeType, body: any = "") => {
  const blank = new Uint8Array(16);
  if (typeof body !== "string") {
    body = JSON.stringify(body);
  }
  const head = Uint8Array.from(blank);
  const buffer = Uint8Array.from(body);
  const headView = new DataView(head.buffer, head.byteOffset, head.byteLength);

  headView.setInt32(0, buffer.length + head.length);
  headView.setInt16(4, 16);
  headView.setInt16(6, 1);
  if (type === "heartbeat") {
    headView.setInt32(8, 2);
  }
  if (type === "join") {
    headView.setInt32(8, 7);
  }
  headView.setInt32(1, 12);
  return concatUint8Arrays([head, buffer]);
};

function concatUint8Arrays(arrs: Uint8Array[]) {
  // 计算总长度
  let totalLength = 0;
  for (const arr of arrs) {
    if (!(arr instanceof Uint8Array)) {
      throw new TypeError("All elements must be Uint8Array");
    }
    totalLength += arr.length;
  }

  // 创建新数组
  const result = new Uint8Array(totalLength);

  // 复制数据
  let offset = 0;
  for (const arr of arrs) {
    result.set(arr, offset);
    offset += arr.length;
  }

  return result;
}
