/**
 * 去除字符串右边空格。
 * @param input 待处理的字符串变量。
 * @returns {string} 返回处理后的字符串。
 * @see {@link https://hyhello.github.io/utils/#/rtrim 在线文档}
 */
export default function rtrim(input: string): string {
	return input.replace(/\s*$/g, '');
}
