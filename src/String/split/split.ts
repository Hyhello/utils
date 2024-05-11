/**
 * 创建新的字符串，在字符串/数值（str）指定位置（index）插入分隔符（separated）。
 * @param str 待处理的字符串变量。
 * @param index 指定位置。
 * @param separated 分隔符。
 * @returns {string} 返回处理后的结果。
 * @see {@link https://hyhello.github.io/utils/#/split 在线文档}
 */
export default function split(str: number | string, index = 3, separated = ','): string {
    if (!str) return String(str);
    const reg = new RegExp(`\\B(?=(?:\\w{${index}})+\\b)`, 'g');
    const splitList = String(str).split('.');
    splitList[0] = splitList[0].replace(reg, separated);
    return splitList.join('.');
}
