import { isArray } from '@/Base';

type ReturnType<T extends any[]> = T extends [infer L, ...infer R]
	? [...(L extends any[] ? ReturnType<L> : [L]), ...ReturnType<R>]
	: [];
/**
 * 数组扁平化处理
 * @param 待处理集合
 * @returns 扁平化处理后的结果
 */
function _flatten<T extends any[]>(arr: T, depth?: number): ReturnType<T> {
	return arr.reduce((prev, next) => {
		let temp = next;
		if (isArray(next)) {
			// depth 不存在则默认为深度扁平化处理
			if (depth == null) {
				temp = _flatten(next);
			} else if (--depth) {
				// depth 存在，则按照depth 深度进行扁平化
				temp = _flatten(next, depth);
			}
		}
		return prev.concat(temp);
	}, []);
}

/**
 * 将数组扁 arr 平化处理。
 * @param 待处理集合
 * @returns 扁平化处理后的结果
 * @see {@link https://hyhello.github.io/utils/#/flatten 在线文档}
 */
export default function flatten<T extends any[]>(arr: T, depth?: number | boolean): T | ReturnType<T> {
	if (typeof depth === 'number' && depth <= 0) return arr;
	if (typeof depth === 'boolean' && depth) return _flatten(arr);
	// 此处存在 depth = false; 则默认使用一层
	return _flatten(arr, depth || 1);
}
