type IFunction = {
    (this: void, ...args: unknown[]): void;
};

/**
 * 防抖节流，当函数（func）重复调用时，最多每隔wait毫秒调用一次该函数。
 * @param func 执行函数。
 * @param wait 时间间隔。
 * @param immediate immediate为true, throttle会在wait时间间隔的开始时立即调用这个函数（func）。
 * @returns 新的函数。
 * @see {@link https://hyhello.github.io/utils/#/throttle 在线文档}
 */
export default function throttle(func: IFunction, wait: number, immediate = false): IFunction {
    let last = new Date().getTime();
    return function (...args: unknown[]): void {
        const now = new Date().getTime();
        if (immediate) {
            func.apply(this, args);
            immediate = false;
            return;
        }
        if (now - last >= wait) {
            func.apply(this, args);
            last = now;
        }
    };
}
