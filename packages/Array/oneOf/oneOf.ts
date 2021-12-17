/**
 * 判断数组里面是否存在元素
 * @param target
 * @param list
 * @returns boolean
 * @example
 * oneOf('a', ['a', 'b', 'c']); // true
 */
export default function oneOf<T>(target: T, list: Array<T>): boolean {
	return list.some((item) => target === item);
}
