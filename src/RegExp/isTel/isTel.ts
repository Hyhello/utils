/**
 * 校验是否是电话号码
 * @param str
 * @returns
 * @example
 * isTel('0271022901');
 */
export default function isTel(str: string): boolean {
	return /^(\d{3,4}-)?\d{7,8}$/.test(str);
}
