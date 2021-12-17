/**
 * 数组去重
 * @param arr
 * @returns
 * @example
 * unique([1, 2, 3, 5, 5]); => [1, 2, 3, 5]
 */
export default function unique<T>(arr: Array<T>): Array<T> {
	return arr.filter((item, index) => arr.indexOf(item, 0) === index);
}
