/**
 * 检测字符串（str）是否是邮箱地址。
 * @param str 待检测的变量。
 * @returns 如果 str 是邮箱地址，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isEmail 在线文档}
 */
export default function isEmail(str: string): boolean {
	return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
