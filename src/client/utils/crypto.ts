export function uint8ArrayToHexString(byteArray: Uint8Array) {
  let hexString = "";
  for (let i = 0; i < byteArray.length; i++) {
    let hex = byteArray[i].toString(16);
    if (hex.length === 1) {
      hex = "0" + hex;
    }
    hexString += hex;
  }
  return hexString;
}

export async function hmacSHA256(text: string, secret: string) {
  let enc = new TextEncoder();
  let algorithm = { name: "HMAC", hash: "SHA-256" };

  let key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    algorithm,
    false,
    ["sign", "verify"]
  );
  let signature = await crypto.subtle.sign(
    algorithm.name,
    key,
    enc.encode(text)
  );
  let digest = uint8ArrayToHexString(new Uint8Array(signature));

  return digest;
}

export interface GenWebTicket {
  ticket: string;
  created_at: number;
  ttl: number;
  context: {};
  nav: {
    img: string;
    sub: string;
  };
}
