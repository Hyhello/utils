import isArray from '../isArray/isArray';
import isObject from '../isObject/isObject';

const hasOwn = Object.prototype.hasOwnProperty;

/**
 * 对象深拷贝。
 * @param v 待拷贝的值。
 * @returns {T} 深拷贝后的值。
 * @see {@link https://hyhello.github.io/utils/#/deepClone 在线文档}
 */
export default function deepClone<T>(v: T): T {
    if (!isObject(v)) return v;

    if (v instanceof WeakMap) {
        throw new Error('Cannot clone WeakMap: WeakMap keys must be objects');
    }

    if (v instanceof Date) {
        return new Date(v.getTime()) as any as T;
    }

    if (v instanceof Set) {
        const clonedSet = new Set<unknown>();
        v.forEach((value) => {
            clonedSet.add(deepClone(value));
        });
        return clonedSet as any as T;
    }

    if (v instanceof Map) {
        const clonedMap = new Map<any, any>();
        v.forEach((value, key) => {
            clonedMap.set(deepClone(key), deepClone(value));
        });
        return clonedMap as any as T;
    }

    const clone: any = isArray(v) ? [] : {};

    for (const key in v) {
        if (hasOwn.call(v, key)) {
            clone[key] = deepClone(v[key]);
        }
    }

    return clone as T;
}
