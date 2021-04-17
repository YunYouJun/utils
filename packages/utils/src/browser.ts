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
  return (...args) => {
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
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, threshold);
    }
  };
}
