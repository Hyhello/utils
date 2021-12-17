/* eslint-disable prefer-spread */
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
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return Array.apply(null, { length: n }).map(() => iteratee);
}
