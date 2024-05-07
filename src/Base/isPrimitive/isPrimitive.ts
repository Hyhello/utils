/**
 * 检测变量（v）是否是基本类型。
 * @param v 待检测类型的变量。
 * @returns {boolean} 如果 v 为一个基本类型，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isPrimitive 在线文档}
 */
export default function isPrimitive(v?: unknown): boolean {
    return Object(v) !== v;
}
