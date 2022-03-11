type IFunction = {
	(this: void, ...args: unknown[]): void;
};

/**
 * 防抖函数
 * @returns
 * @example
 *
 */
export default function debounce(func: IFunction, wait: number, immediate = false): IFunction {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let timer: any = null;
	return function (...args: unknown[]): void {
		if (immediate) {
			func.apply(this, args);
			immediate = false;
			return;
		}
		if (timer) {
			window.clearTimeout(timer);
			timer = null;
		}
		timer = window.setTimeout(() => {
			func.apply(this, args);
		}, wait || 0);
	};
}
