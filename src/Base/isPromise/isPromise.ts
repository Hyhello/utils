import isObject from '../isObject/isObject';
import isFunction from '../isFunction/isFunction';

/**
 * 检测变量（v）是否是一个 Promise。
 * @param v 待检测类型的变量。
 * @returns {boolean} 如果 v 为一个 Promise，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isPromise 在线文档}
 */
export default function isPromise<T>(v: unknown): v is Promise<T> {
    // isObject(v) || isFunction(v); 初始promise 或者 promise.then返回的
    return !!v && (isObject(v) || isFunction(v)) && isFunction((<any>v).then);
}
