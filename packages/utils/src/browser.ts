/**
 * 浏览器
 * @packageDocumentation
 */

/**
 * 防抖函数：函数被触发后 n 秒执行回调，n 秒内被触发，则重新计时
 * @param fn 执行的函数
 * @param delay ms 延迟执行时间
 */
export function debounce(fn: Function, delay = 200) {
  let timer = null;
  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * 节流函数：单位时间内，只有一次触发事件的回调函数执行
 * @param fn
 * @param threshold ms 单位时间
 */
export function throttle(fn: Function, threshold = 200) {
  // 第一次立即执行
  let timer;
  return (...args: any) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, threshold);
    }
  };
}

/**
 * 控制台输出样式信息
 * @param name 名称
 * @param link 链接
 * @param color 颜色
 */
export function consoleInfo(name: string, link: string, color?: string) {
  if (!color) {
    color = "#0078E7";
  }
  console.log(
    `%c ☁️ ${name} %c ${link}`,
    `color: white; background: ${color}; padding:5px 0;`,
    `padding:4px;border:1px solid ${color};`
  );
}
