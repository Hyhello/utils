/**
 * 去除字符串两边空格。
 * @param str 待处理的字符串变量。
 * @returns {string} 返回处理后的字符串。
 * @see {@link https://hyhello.github.io/utils/#/trim 在线文档}
 */
export default function trim(str: string): string {
    const nTrim = String.prototype.trim;
    return nTrim ? nTrim.call(str) : str.replace(/^\s*|\s*$/g, '');
}
