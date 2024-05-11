import { isObject, isUndefined } from '@/Base';

type ArgType = string | number | { [propName: string]: any };

/**
 * 服务于sort，用于排序
 * @param key 需要排序的数组。
 * @returns {Function} 返回排序后的数组。
 * @see {@link https://hyhello.github.io/utils/#/compare 在线文档}
 */
export default function compare(key?: string | number): (arg1: ArgType, arg2: ArgType) => number {
    const hasKey = !isUndefined(key);
    return function (arg1: ArgType, arg2: ArgType): number {
        const target1 = hasKey && isObject(arg1) ? arg1[<keyof ArgType>key] : arg1;
        const target2 = hasKey && isObject(arg2) ? arg2[<keyof ArgType>key] : arg2;
        if (target1 > target2) return 1;
        if (target1 < target2) return -1;
        return 0;
    };
}
