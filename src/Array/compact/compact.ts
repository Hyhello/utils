/**
 * 去除 falsey 的值
 * @param input
 * @returns
 * @example
 * compact([1, 2, 3, 0, '', false, undefined, null]) => [1, 2, 3]
 */
export default function compact<T>(input: T[]): T[] {
	return input.filter(Boolean);
}
