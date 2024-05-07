/**
 * 检测变量（v）是否是一个函数。
 * @param v 待检测类型的变量。
 * @returns {boolean} 一个指示指定的变量是否为 函数。
 * @see {@link https://hyhello.github.io/utils/#/isFunction 在线文档}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function isFunction(v: unknown): v is Function {
    return typeof v === 'function';
}
