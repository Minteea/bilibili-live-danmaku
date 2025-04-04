import { inflate } from "pako";
import { brotliDecompress } from "./inflate";

export interface JoinPack {
  uid: number;
  roomid: number;
  protover: number;
  platform: string;
  type: number;
  key?: string;
  buvid?: string;
}

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

export const WSOperation = {
  HEARTBEAT: 2,
  HEARTBEAT_REPLY: 3,
  MESSAGE: 5,
  USER_AUTHENTICATION: 7,
  CONNECT_SUCCESS: 8,
} as const;

export type WSOperation = EnumValue<typeof WSOperation>;

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

export const decoder = (buffer: Uint8Array) => {
  const packs = cutBuffer(buffer).map((buf) => {
    // 数据包
    const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);

    // [6+2] 协议版本
    const protocol = view.getInt16(6);
    // [8+4] 操作类型
    const operation = view.getInt32(8);

    // [16+] 数据包内容
    const body = buf.slice(16);

    let data: any;
    if (protocol === 0) {
      data = JSON.parse(textDecoder.decode(body));
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
      data = decoder(inflate(body));
    }
    if (protocol === 3) {
      data = decoder(brotliDecompress(body));
    }

    return { buf, protocol, data, operation };
  });
  return packs.flatMap((pack) => {
    if (pack.protocol === 2 || pack.protocol === 3) {
      return pack.data as typeof packs;
    }
    return pack;
  });
};

export const encoder = (type: WSOperation, body: any = "") => {
  if (typeof body !== "string") {
    body = JSON.stringify(body);
  }
  // [0+16] 数据包头部
  const head = new Uint8Array(16);
  const headView = new DataView(head.buffer, head.byteOffset, head.byteLength);

  // [16+] 数据包内容
  const buffer = textEncoder.encode(body as string);

  // [0+4] 数据包长度
  headView.setInt32(0, buffer.length + head.length);
  // [4+2] 数据包头部长度
  headView.setInt16(4, 16);
  // [6+2] 协议版本
  headView.setInt16(6, 1);
  // [8+4] 操作类型
  headView.setInt32(8, type);
  // [12+4] 数据包头部长度(固定为1)
  headView.setInt32(12, 1);

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
