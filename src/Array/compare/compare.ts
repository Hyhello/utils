import { isObject, isUndefined } from '@/Base';

const enum ORDER {
    ASC = 'asc',
    DESC = 'desc'
}

/**
 * 服务于sort，用于排序
 * @param key 需要排序的数组。
 * @returns {Function} 返回排序后的数组。
 * @see {@link https://hyhello.github.io/utils/#/compare 在线文档}
 */
export default function compare(key?: string | number, order?: 'asc' | 'desc'): <T>(arg1: T, arg2: T) => number {
    const hasKey = !isUndefined(key);
    order = order || ORDER.ASC;
    return function <T>(arg1: T, arg2: T): number {
        const target1 = hasKey && isObject(arg1) ? arg1[key as keyof T] : arg1;
        const target2 = hasKey && isObject(arg2) ? arg2[key as keyof T] : arg2;
        if (target1 > target2) return order === ORDER.ASC ? 1 : -1;
        if (target1 < target2) return order === ORDER.ASC ? -1 : 1;
        return 0;
    };
}
