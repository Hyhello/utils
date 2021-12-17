/* eslint-disable prefer-spread */
/**
 * 根据size 拆分数组
 * @param input
 * @param size
 * @returns // 返回一个新数组
 * @example
 * chunk([1, 2, 3, 4], 1); => [[1], [2], [3], [4]]
 */
export default function chunk<T>(input: T[], size?: number): T[] | T[][] {
	if (!size) return input.slice();
	const len: number = Math.ceil(input.length / size);
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return Array.apply(null, { length: len }).map((x, i) => input.slice(i * size, (i + 1) * size));
}
