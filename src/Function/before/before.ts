/* eslint-disable @typescript-eslint/no-explicit-any */
type IFunction = {
	(this: void, ...args: unknown[]): any;
};
/**
 * 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
 * @returns
 * @example
 *
 */
export default function before(n: number, func: IFunction): IFunction {
	let times = 0;
	return function (...args: unknown[]) {
		if (times++ < n) {
			func.apply(this, args);
		}
	};
}
