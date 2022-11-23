/**
 * 检测字符串（str）是否是手机号码。
 * @param str 待检测的变量。
 * @returns {boolean} 如果 str 是手机号码，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isMobile 在线文档}
 */
export default function isMobile(str: number | string): boolean {
	return /^(\+?0?86-?)?1[3456789]\d{9}$/.test(String(str));
}
