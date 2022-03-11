type IFunction = {
	(this: void, ...args: unknown[]): void;
};

/**
 * 函数节流
 * @returns
 * @example
 *
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
