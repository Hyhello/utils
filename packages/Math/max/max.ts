/**
 * @param arr
 * @returns
 * @example
 * max([1, 2, 3]);  3
 * max([]) -Infinity
 */
export default function max(arr: Array<number>): number {
	return Math.max.apply(null, arr);
}
