/**
 * 检测字符串（str）是否是电话号码（xxx-xxxxxxx|xxx-xxxxxxxx|xxxx-xxxxxxxx|xxxx-xxxxxxxx|xxxxxxx|xxxxxxxx）。
 * @param str 待检测的变量。
 * @returns {boolean} 如果 str 是电话号码，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isTel 在线文档}
 */
export default function isTel(str: string): boolean {
	return /^(\d{3,4}-)?\d{7,8}$/.test(str);
}
