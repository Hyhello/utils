/**
 * 首字母转换为小写
 * @param str
 * @returns
 * @example
 * uncapitalize('Aaaa'); => aaaa
 */
export default function uncapitalize(str: string): string {
	return str.charAt(0).toLowerCase() + str.substr(1);
}
