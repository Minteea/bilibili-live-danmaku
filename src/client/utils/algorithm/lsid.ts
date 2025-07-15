// 模拟Rust的random_string!宏
function randomString(len: number, charset: string): string {
  const chars = charset.split("");
  const charsetLength = chars.length;

  return Array.from(
    { length: len },
    () => chars[Math.floor(Math.random() * charsetLength)]
  ).join("");
}

// 主函数
export function generateLsid(): string {
  const randomPart = randomString(
    8,
    "0123456789ABCDEF" // 保持全大写十六进制特征
  );

  const timestampPart = Date.now()
    .toString(16) // 转换为十六进制
    .toUpperCase(); // 保持与Rust的:X格式一致

  return `${randomPart}_${timestampPart}`;
}
