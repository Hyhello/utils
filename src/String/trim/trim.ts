const nTrim = String.prototype.trim;
/**
 * 去除字符串两边空格。
 * @param input 待处理的字符串变量。
 * @returns {string} 返回处理后的字符串。
 * @see {@link https://hyhello.github.io/utils/#/trim 在线文档}
 */
export default function trim(input: string): string {
    try {
        return nTrim.call(input);
    } catch (e) {
        return input.replace(/^\s*|\s*$/g, '');
    }
}
