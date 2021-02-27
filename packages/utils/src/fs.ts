import fs from "fs";
import { resolve } from "path";

/**
 * 检查文件夹是否存在，若不存在则新建
 * @param path
 */
export function checkFolderExists(path = "tmp/") {
  const folder = resolve(process.cwd(), path);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
}
