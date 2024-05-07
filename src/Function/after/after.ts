/* eslint-disable @typescript-eslint/no-explicit-any */
type IFunction = {
    (this: void, ...args: unknown[]): any;
};
/**
 * utils.before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func 。
 * @param n 方法应该在调用多少次后才执行。
 * @param func 执行函数。
 * @returns {function} 新的函数。
 * @see {@link https://hyhello.github.io/utils/#/after 在线文档}
 */
export default function after(n: number, func: IFunction): IFunction {
    let times = 0;
    return function (...args: unknown[]) {
        if (times++ >= n) {
            func.apply(this, args);
        }
    };
}
