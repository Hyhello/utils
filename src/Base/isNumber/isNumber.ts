/**
 * 检测变量（v）是否是数字。
 * @param v 待检测类型的变量。
 * @returns {boolean} 一个指示指定的变量是否为 数字。
 * @see {@link https://hyhello.github.io/utils/#/isNumber 在线文档}
 */
export default function isNumber(v: unknown): boolean {
    return typeof v === 'number' && !Number.isNaN(v) && v !== Infinity;
}
