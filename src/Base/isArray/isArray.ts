/**
 * 检测变量（v）是否是数组。
 * @param v 待检测类型的变量。
 * @returns {boolean} 一个指示指定的变量是否为数组。
 * @see {@link https://hyhello.github.io/utils/#/isArray 在线文档}
 */
export default function isArray<T>(v: unknown): v is T[] {
    try {
        return Array.isArray(v);
    } catch (e) {
        return v instanceof Array;
    }
}
