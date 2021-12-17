import isNumber from '../isNumber/isNumber';
/**
 * 检测n是否是一个整数
 * @param n
 * @example
 * isInteger(1); => true
 * isInteger('1'); => false
 * isInteger(Infinity); => false
 * isInteger(5.000000000000001); => false
 * isInteger(5.0000000000000001); => true
 * isInteger(Number.MIN_VALUE); => false
 */
export default function isInteger(n: unknown): boolean {
	try {
		return Number.isInteger(n);
	} catch (e) {
		if (!isNumber(n)) return false;
		return typeof n === 'number' && Math.floor(n) === n;
	}
}
