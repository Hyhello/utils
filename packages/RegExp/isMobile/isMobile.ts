/**
 * 校验是否是手机号码
 * @param str
 * @returns
 * @example
 * isTel('13455667788'); => true
 */
export default function isTel(str: number | string): boolean {
	return /^(\+?0?86-?)?1[3456789]\d{9}$/.test(String(str));
}
