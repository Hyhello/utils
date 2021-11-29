/**
 * 生成长度为n的数组
 * @param n
 * @param iteratee
 * @returns
 * @example
 * rangeArr<string>(1, 2) => [2, 2]
 * rangeArr<function>(1, () => {}) => [() => {}, () => {}]
 */

export default function rangeArr<T>(n: number, iteratee?: T | undefined): Array<T | undefined> {
	return Array.from({ length: n }, () => iteratee);
}
