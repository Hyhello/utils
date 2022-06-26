/**
 * 获取数组（array）中的最大值。
 * @param arr 待处理的数组。
 * @returns {number} 数组中的最大值。
 * @see {@link https://hyhello.github.io/utils/#/max 在线文档}
 */
export default function max(arr: Array<number>): number {
	return Math.max.apply(null, arr);
}
