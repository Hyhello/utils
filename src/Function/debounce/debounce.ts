/**
 * 防抖函数，当函数（func）重复调用时，函数(func)在最后一次调用时刻的wait毫秒后执行。
 * @param func 执行函数。
 * @param wait 时间间隔。
 * @param immediate immediate为true, debounce会在wait时间间隔的开始时立即调用这个函数（func）。
 * @returns {function} 新的函数。
 * @see {@link https://hyhello.github.io/utils/#/debounce 在线文档}
 */
export default function debounce<T extends any[]>(
    func: (...args: T) => any,
    wait: number,
    immediate = false
): (...args: T) => void {
    let timer = 0;
    return function <C>(this: C, ...args: T) {
        if (immediate) {
            func.apply(this, args);
            immediate = false;
            return;
        }
        if (timer) {
            window.clearTimeout(timer);
            timer = 0;
        }
        timer = window.setTimeout(() => {
            func.apply(this, args);
        }, wait || 0);
    };
}
