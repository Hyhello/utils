const nToFixed = Number.prototype.toFixed;
/**
 * 重写 toFixed，解决后面多余 0 的问题。
 * @param num 待处理的值。
 * @param fixed 保留多少位。
 * @returns {string} 返回处理后的值。
 * @see {@link https://hyhello.github.io/utils/#/toFixed 在线文档}
 */
export default function toFixed(num: number, fixed?: number): string {
	const val = nToFixed.call(num, fixed);
	if (num === +val) return String(num);
	return val;
}
