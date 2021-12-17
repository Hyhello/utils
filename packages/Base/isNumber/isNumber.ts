/**
 * 判断是否是一个数字
 * @param v
 * @returns
 * @example
 * isNumber(NaN) false
 * isNumber(1) true
 * isNumber('1') false
 */
export default function isNumber(v: unknown): boolean {
	return typeof v === 'number' && !Number.isNaN(v) && v !== Infinity;
}
