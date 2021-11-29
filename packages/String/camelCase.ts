/**
 * 字符串转换为驼峰
 * @param str
 * @param size  // 是否大小驼峰
 * @returns
 * @example
 * camelCase('__a-b'); aB
 * camelCase('__a-b', true); AB
 * camelCase('__a-  __b', true); AB
 */
export default function camelCase(str: string, size?: boolean): string {
	const reg = /[-_.\W\s]+(\w|$)/g;
	const n = str.replace(reg, function (_, $1) {
		return $1.toUpperCase();
	});
	return size ? n : n.charAt(0).toLowerCase() + n.substr(1);
}
