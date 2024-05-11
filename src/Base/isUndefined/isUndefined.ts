/**
 * 检测变量（v）是否 undefined 或者 null。
 * @param v 待检测类型的变量。
 * @returns {boolean} 如果 v 为一个 undefined 或者 null，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isUndefined 在线文档}
 */
export default function isUndefined<T extends undefined | null>(v?: unknown): v is T {
    return v === undefined || v === null;
}
