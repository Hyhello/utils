/**
 * 转换为number(保留数字)
 * @param str
 * @returns
 * @example
 * toNumber('1a'); => 1;
 * toNumber('aa'); => NaN;
 * toNumber('12'); => 12;
 */
export default function toNumber(str: string): number {
	const n = parseFloat(str);
	return Number.isNaN(n) ? NaN : n;
}
