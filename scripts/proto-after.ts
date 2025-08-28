import fs from "fs";
import path from "path";

// 要修改的文件路径
const filePath = "./src/proto/index.js";

// 读取文件
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("读取文件失败:", err);
    process.exit(1);
  }

  // 执行替换操作
  // 示例：将某行内容替换为新内容
  const oldText = 'import * as $protobuf from "protobufjs/minimal"';
  const newText = 'import $protobuf from "protobufjs/minimal.js"';

  const modifiedData = data.replace(oldText, newText);

  // 写回文件
  fs.writeFile(filePath, modifiedData, "utf8", (err) => {
    if (err) {
      console.error("写入文件失败:", err);
      process.exit(1);
    }
  });
});
