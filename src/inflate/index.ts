import { BrotliDecode } from "./brotli";

export const brotliDecompress = (d: Uint8Array) =>
  Uint8Array.from(BrotliDecode(Int8Array.from(d)));
