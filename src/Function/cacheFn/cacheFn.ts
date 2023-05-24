/**
 * 缓存函数，参考的vue中的cached方法。
 * @param key
 * @returns 新的函数。
 * @see {@link https://hyhello.github.io/utils/#/cacheFn 在线文档}
 */
// 参考了vue2.0的 cached方法。
// eslint-disable-next-line @typescript-eslint/ban-types
export default function cacheFn(fn: Function): Function {
	const cache = Object.create(null);
	return function (key: string) {
		return cache[key] || (cache[key] = fn(key));
	};
}
