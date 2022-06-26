/**
 * 将字符串变量首字母转为小写。
 * @param str 待处理的字符串变量。
 * @returns {string} 返回字符串首字母小写。
 * @see {@link https://hyhello.github.io/utils/#/uncapitalize 在线文档}
 */
export default function uncapitalize(str: string): string {
	return str.charAt(0).toLowerCase() + str.substr(1);
}
