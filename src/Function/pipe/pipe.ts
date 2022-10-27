/**
 * 将Promise返回和异步函数组合到可重用的管道中。
 * @param {function} list 函数（function）集合。
 * @returns {Promise} 待执行函数（闭包Promise）。
 * @see {@link https://hyhello.github.io/utils/#/pipe 在线文档}
 */
export default function pipe<T extends unknown[]>(...list: Array<(...args: T) => Promise<any>>) {
	return async (...args: T) => {
		let currentInput;
		for (const func of list) {
			currentInput = await func(...args);
		}
		return currentInput;
	};
}
