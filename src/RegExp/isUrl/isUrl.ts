/**
 * 检测字符串（str）是否是 url。
 * @param str 待检测的变量。
 * @returns {boolean} 如果 str 是 url，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isUrl 在线文档}
 */
export default function isUrl(str: string): boolean {
    return /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#\\/%?=~_|!:,\\.;]+[-A-Za-z0-9+&@#/%=~_|]$/.test(str);
}
