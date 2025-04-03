export class Cookies<K extends string = string> extends Map<K, string> {
  constructor(cookie?: string | Iterable<[K, string]> | Record<K, string>) {
    if (typeof cookie == "string") {
      cookie = splitCookieString(cookie) as [K, string][];
    } else if (typeof cookie == "object" && !(Symbol.iterator in cookie)) {
      cookie = keyValuePairToArray(cookie);
    }
    super(cookie);
  }
  set(k: string, v: string) {
    if (/[=; ]/.test(k) || /[; ]/.test(v)) {
      throw new TypeError("Invalid key or value");
    }
    super.set(k as any, v);
    return this;
  }
  setFromHeaders(headers: Headers) {
    headers.forEach((val, key) => {
      if (key == "set-cookie") {
        const [k, ...s] = val.split(";")[0].trim().split("=");
        const v = s.join("=");
        this.set(k, v);
      }
    });
  }
  toString() {
    return [...this].map(([k, v]) => `${k as string}=${v}`).join("; ");
  }
  append(
    cookie:
      | string
      | (Iterable<[string, string]> & { forEach: never })
      | IterableWithForEach<[string, string]>
      | Record<string, string>
  ) {
    if (typeof cookie == "string") {
      cookie.split(";").forEach((item) => {
        const [k, ...s] = item.trim().split("=");
        if (cookieAttributes.has(k)) return;
        const v = s.join("=");
        this.set(k, v);
      });
    } else if (typeof cookie == "object") {
      if (!(Symbol.iterator in cookie)) {
        cookie = keyValuePairToArray(cookie);
      } else if (!("forEach" in cookie)) {
        cookie = [...cookie];
      }
      cookie.forEach(([k, v]) => this.set(k, v));
    }
    return this;
  }
  merge<L extends string>(cookies: Cookies<L>): Cookies<K | L> {
    const c = new Cookies<K | L>();
    this.forEach(([k, v]) => c.set(k, v));
    cookies.forEach(([k, v]) => c.set(k, v));
    return c;
  }
}

export interface Cookies<K> {
  get(key: K): string;
}

const cookieAttributes = new Set([
  "expires",
  "max-age",
  "path",
  "domain",
  "secure",
]);

function splitCookieString(cookie: string) {
  return cookie
    .split(";")
    .map((item): [string, string] => {
      const [k, ...s] = item.trim().split("=");
      const v = s.join("=");
      return [decodeURIComponent(k), decodeURIComponent(v)];
    })
    .filter(([k]) => !cookieAttributes.has(k));
}

function keyValuePairToArray<K extends string, V>(obj: Record<K, V>) {
  const arr: [K, V][] = [];
  for (const key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}

type IterableWithForEach<T> = Iterable<T> & {
  forEach(h: (v: T) => void): void;
};

/** 从Headers获取cookie */
export function getSetCookie(headers: Headers) {
  const cookie: Record<string, string> = {};
  headers.forEach((val, key) => {
    if (key == "set-cookie") {
      const coo = val.split(";")[0].split("=");
      const key = coo[0]?.trim();
      const value = coo[1]?.trim();
      cookie[key] = value;
    }
  });
  return cookie;
}
