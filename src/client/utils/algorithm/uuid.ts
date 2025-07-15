// Refactored by Deepseek
// from `https://github.com/SocialSisterYi/bilibili-API-collect/issues/933#issue-2073916390`

// Copyright (c) 2024 Hantong Chen(cxw620). MIT license.
// RE from `https://s1.hdslb.com/bfs/seed/log/report/log-reporter.js`

// 工具函数代替Rust宏
const DIGIT_MAP: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "10", // 保持原始数据不变
];

// 代替random_choice!宏
function randomChoice(...args: (number | string | string[])[]): string {
  // 参数解析
  const hasSeparator = typeof args[args.length - 2] === "string";
  const [choiceSet, separator, lengths] = hasSeparator
    ? [args.pop() as string[], args.pop() as string, args as number[]]
    : [args.pop() as string[], undefined, args as number[]];

  // 生成随机段
  const segments = lengths.map((length) =>
    Array.from(
      { length },
      () => choiceSet[Math.floor(Math.random() * choiceSet.length)]
    ).join("")
  );

  return separator ? segments.join(separator) : segments.join("");
}

// 代替now!宏
function getTimestamp(): number {
  return Date.now() % 100_000;
}

// 代替UuidInfoc结构体
export function generateUuid(): string {
  const t = getTimestamp().toString().padStart(5, "0");

  // 生成符合原始格式的各个部分
  const parts = [randomChoice(8, 4, 4, 4, 12, "-", DIGIT_MAP), t, "infoc"];

  return parts.join("");
}
