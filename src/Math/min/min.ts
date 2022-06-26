/**
 * 获取数组（array）中的最小值。
 * @param arr 待处理的数组。
 * @returns {number} 数组中的最小值。
 * @see {@link https://hyhello.github.io/utils/#/min 在线文档}
 */
export default function min(arr: Array<number>): number {
	return Math.min.apply(null, arr);
}
