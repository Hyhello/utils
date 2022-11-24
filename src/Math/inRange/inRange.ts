/**
 * 检查 n 是否在 start 与 end 之间，但不包括 end。
 * @param n 要检查的值。
 * @param start 开始检查的范围。
 * @param end 结束范围。
 * @returns {boolean} 如果n在范围内，返回true, 否则返回false。
 * @see {@link https://hyhello.github.io/utils/#/inRange 在线文档}
 */
export default function inRange(n: number, ...args: number[]): boolean {
	let [start = 0, end] = args;
	if (end == null) {
		end = start;
		start = 0;
	}
	return n >= Math.min(start, end) && n < Math.max(start, end);
}
