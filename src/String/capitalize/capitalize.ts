/**
 * 首字母大写
 * @param str
 * @returns
 * @example
 * capitalize('aaa'); => 'Aaa';
 */
export default function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.substr(1);
}
