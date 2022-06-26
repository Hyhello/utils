/**
 * 检测变量（str）是否是身份证号码。
 * @param str 待检测的变量。
 * @returns {boolean} 如果 str 是身份证号码，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isIdCard 在线文档}
 */
export default function isIdCard(str: string | number): boolean {
	return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
		String(str)
	);
}
