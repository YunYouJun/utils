/**
 * 辅助工具，输出彩色控制台信息。
 * @packageDocumentation
 */

import chalk from "chalk";
import { defaultOptions, LoggerOptions } from "./options";

type Color = "green" | "yellow" | "red" | "blue" | "cyan";
interface ColorMap {
  [propName: string]: Color;
}

type Mode = "dev" | "prod";

/**
 * 日志工具类
 */
export default class Logger {
  /**
   * 启用
   */
  enable = true;
  /**
   * 当前模式，开发模式输出 Debug 信息
   */
  mode: Mode = "dev";

  constructor(public options?: Partial<LoggerOptions>) {
    this.options = Object.assign(defaultOptions, options);
  }

  /**
   * 打印消息
   * @param type 类型
   * @param msg 消息
   */
  print(type: string, msg: any) {
    if (!this.enable) return;

    const color: ColorMap = {
      success: "green",
      warning: "yellow",
      error: "red",
      info: "blue",
      debug: "cyan",
    };

    const typeColor = color[type];
    const typeName = `[${type}]`;
    const content = [];

    if (this.options.prefix) {
      content.push(this.options.prefix);
    }

    if (this.options.type) {
      content.push(chalk[typeColor as Color](typeName));
      content.push(msg);
    } else {
      content.push(chalk[typeColor as Color](msg));
    }

    console.log(...content);
  }

  /**
   * 输出成功信息（绿色）
   * @param msg 文本
   */
  success(msg: any) {
    this.print("success", msg);
  }

  /**
   * 输出警告信息（黄色）
   * @param msg 文本
   */
  warning(msg: any) {
    this.print("warning", msg);
  }

  /**
   * 输出错误信息（红色）
   * @param msg 文本
   */
  error(msg: any) {
    this.print("error", msg);
  }

  /**
   * 输出提示信息（蓝色）
   * @param msg 文本
   */
  info(msg: any) {
    this.print("info", msg);
  }

  /**
   * 输出 Debug 信息（cyan）
   * @param msg
   */
  debug(msg: any) {
    if (this.mode === "dev") {
      this.print("debug", msg);
    }
  }
}
