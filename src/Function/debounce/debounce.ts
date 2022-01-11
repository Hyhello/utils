/**
 * 防抖函数
 * @returns
 * @example
 *
 */
export default function debounce(func: typeof Function, wait: number, immediate = false): typeof Function {
	const timer = null;
	return function (...args: unknown[]): void {
		if (immediate) {
			func.apply(this, args);
			immediate = false;
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
