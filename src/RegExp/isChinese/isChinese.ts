/**
 * 检测字符串（str）是否是中文。
 * @param str 待检测的变量。
 * @returns {boolean} 如果 str 是中文，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isChinese 在线文档}
 */
export default function isChinese(str: string): boolean {
	return /^[\u4E00-\u9FA5]+$/.test(str);
}
