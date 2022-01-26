/**
 * 通用小工具
 * @packageDocumentation
 */

/**
 * 休眠函数
 * @param ms
 */
export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms))
}
