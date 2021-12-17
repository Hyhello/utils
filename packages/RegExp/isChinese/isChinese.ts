/**
 * 判断是否是中文
 * @param str
 * @returns
 * isChinese('你好'); => true
 */
export default function isChinese(str: string): boolean {
	return /^[\u4E00-\u9FA5]+$/.test(str);
}
