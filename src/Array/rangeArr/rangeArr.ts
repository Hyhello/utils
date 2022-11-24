/* eslint-disable prefer-spread */
/**
 * 创建一个长度为（n）的数组，数组每个值为（iteratee）（注：默认为 undefined）。
 * @param n 数组的长度。
 * @param iteratee 数组包含的默认值。
 * @returns {Array<T | undefined>} 创建一个长度为（n）的数组，数组每个值为（iteratee）。
 * @see {@link https://hyhello.github.io/utils/#/rangeArr 在线文档}
 */
export default function rangeArr<T>(n: number, iteratee?: T | undefined): Array<T | undefined> {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return Array.apply(null, { length: n }).map(() => iteratee);
}
