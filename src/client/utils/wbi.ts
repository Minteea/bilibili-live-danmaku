// https://github.com/SocialSisterYi/bilibili-API-collect

import md5 from "md5";

function unixTimestamp() {
  return Math.floor(Date.now() / 1000);
}

/** 获取混合key */
function getMixinKey(imgKey: string, subKey: string) {
  const rawWbiKey = imgKey + subKey;
  const MIXIN_KEY_ENC_TAB = new Uint8Array([
    46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
    33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
    61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
    36, 20, 34, 44, 52,
  ]);
  const mixedChars: string[] = [];
  for (const index of MIXIN_KEY_ENC_TAB) {
    // 获取编码表中的索引值
    if (index >= rawWbiKey.length) {
      throw new Error(`Index ${index} out of bounds for raw_wbi_key`);
    }
    // 将对应位置的字符存入数组
    mixedChars.push(rawWbiKey.charAt(index));
  }
  // 将字符数组组合成字符串
  let mixinKey = mixedChars.join("");
  // 截取前32个字符
  return mixinKey.substring(0, 32);
}

export async function getWbiUrl(
  url: string,
  imgKey: string,
  subKey: string
): Promise<string>;
export async function getWbiUrl(
  url: URL,
  imgKey: string,
  subKey: string
): Promise<URL>;
export async function getWbiUrl(
  url: string | URL,
  imgKey: string,
  subKey: string
): Promise<string | URL> {
  const mixinKey = getMixinKey(imgKey, subKey);

  const newUrl = new URL(url);
  const searchParams = newUrl.searchParams;
  searchParams.set("wts", unixTimestamp().toString());
  searchParams.sort();

  const s = searchParams.toString();
  const w_rid = md5(s + mixinKey);
  searchParams.set("w_rid", w_rid);

  if (typeof url == "string") {
    return newUrl.toString();
  } else {
    return newUrl;
  }
}
