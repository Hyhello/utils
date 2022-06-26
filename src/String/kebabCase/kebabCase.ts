/**
 * 转换字符串string为kebab case。
 * @param str 待转换的字符串。
 * @returns {string} 返回处理后的字符串。
 * @see {@link https://hyhello.github.io/utils/#/kebabCase 在线文档}
 */
export default function kebabCase(str: string): string {
	return str
		.replace(/^[-_.\W\s]+|[-_.\W\s]+$/, '')
		.replace(/[-_.\W\s]+/g, '-')
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.toLowerCase();
}
