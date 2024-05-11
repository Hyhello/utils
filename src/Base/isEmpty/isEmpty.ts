/* eslint-disable @typescript-eslint/no-explicit-any */
import getType from '../getType/getType';

/**
 * 检测变量（v）是否是一个空值。
 * @param v 待检测类型的变量。
 * @returns {boolean} 一个指示指定的变量是否为 空。
 * @see {@link https://hyhello.github.io/utils/#/isEmpty 在线文档}
 */
export default function isEmpty(v: unknown): boolean {
    if (v == null) return true;
    switch (getType(v)) {
        case 'array':
        case 'string':
        case 'function':
        case 'arguments':
            return !(<any>v).length;
        case 'file':
        case 'map':
        case 'size':
        case 'set':
            return !(<any>v).size;
        case 'error':
            return !(<any>v).message;
        case 'object':
            // eslint-disable-next-line @typescript-eslint/ban-types
            return !Object.keys(<object>v).length;
        default:
            break;
    }
    return false;
}
