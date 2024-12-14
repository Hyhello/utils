import isNumber from '../isNumber/isNumber';

/**
 * 检测变量（v）是否是整数。
 * @param v 待检测类型的变量。
 * @returns {boolean} 一个指定的变量是否为整数。
 * @see {@link https://hyhello.github.io/utils/#/isInteger 在线文档}
 */
export default function isInteger(v: unknown): v is number {
    if (Number.isInteger) {
        return Number.isInteger(v);
    } else if (isNumber(v)) {
        // 此处 NaN % 1 = NaN, Infinity % 1 = NaN; 此处屏蔽了 NaN, Infinity等特殊值
        return v % 1 === 0;
    }
    return false;
}
