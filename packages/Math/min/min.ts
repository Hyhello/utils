/**
 * @param arr
 * @returns
 * @example
 * min([1, 2, 3]);  1
 * min([]) Infinity
 */
export default function min(arr: Array<number>): number {
	return Math.min.apply(null, arr);
}
