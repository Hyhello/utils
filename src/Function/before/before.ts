/**
 * 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
 * @param n 函数（func）允许调用的最大次数。
 * @param func 执行函数。
 * @param context 上下文。
 * @returns {function} 新的函数。
 * @see {@link https://hyhello.github.io/utils/#/before 在线文档}
 */
export default function before<T extends any[]>(
    n: number,
    func: (...args: T) => any,
    context?: object
): (...args: T) => void {
    let times = 0;
    return function (...args: T) {
        if (times++ < n) {
            func.apply(context, args);
        }
    };
}
