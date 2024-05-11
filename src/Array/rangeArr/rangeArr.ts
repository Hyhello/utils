import { isFunction } from '@/Base';

export function rangeArr<T>(n: number, iteratee?: T): Array<T | undefined>;

export function rangeArr<T>(n: number, iteratee?: (k: number) => T): Array<T | undefined>;

export function rangeArr<T>(n: number, iteratee?: T | ((k: number) => T)): Array<T | undefined>;

/**
 * 创建一个长度为（n）的数组，数组每个值为（iteratee）（注：默认为 undefined）。
 * @param n 数组的长度。
 * @param iteratee 数组包含的默认值。
 * @returns {Array<T | undefined>} 创建一个长度为（n）的数组，数组每个值为（iteratee）。
 * @see {@link https://hyhello.github.io/utils/#/rangeArr 在线文档}
 */
export default function rangeArr<T>(n: number, iteratee?: T | ((k: number) => T)): Array<T | undefined> {
    const iterFn = isFunction(iteratee) ? iteratee : () => iteratee;
    return Array.from<{ length: number }, T | undefined>({ length: n }, (v: any, k: number) => iterFn(k));
}
