/**
 * 检测变量（v）是否是对象。
 * @param v 待检测类型的变量。
 * @returns {boolean} 如果 v 为一个对象，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isObject 在线文档}
 */
export default function isObject<T extends object>(v: unknown): v is T {
    return typeof v === 'object' && v !== null;
}
