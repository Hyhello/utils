import getType from '../getType/getType';
/**
 * 检测变量（v）是否是普通对象。
 * @param v 待检测类型的变量。
 * @returns 如果 v 为一个对象，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isPlainObject 在线文档}
 */
export default function isPlainObject(v: unknown): v is object {
    return getType(v) === 'object';
}
