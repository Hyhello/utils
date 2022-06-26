/**
 * 将字符串（str）转换为 number。
 * @param str 待处理的字符串变量。
 * @returns {number} 返回处理后的结果。
 * @see {@link https://hyhello.github.io/utils/#/toNumber 在线文档}
 */
export default function toNumber(str: string): number {
	const n = parseFloat(str);
	return Number.isNaN(n) ? NaN : n;
}
