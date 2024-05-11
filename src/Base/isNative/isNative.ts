import isFunction from '../isFunction/isFunction';

/**
 * 检测函数（v）是否是 js 原生方法。
 * @param v 待检测类型的函数。
 * @returns {boolean} 一个指示指定的函数是否为 js 原生方法。
 * @see {@link https://hyhello.github.io/utils/#/isNative 在线文档}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function isNative(v: Function): v is Function {
    return isFunction(v) && /native code/.test(v.toString());
}
