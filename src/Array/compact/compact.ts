/**
 * 创建一个新数组，包含原数组中所有的非假值元素。例如 false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
 * @param arr 需要处理的数组。
 * @returns {Array<T>} 返回过滤掉假值的新数组。
 * @see {@link https://hyhello.github.io/utils/#/compact 在线文档}
 */
export default function compact<T>(arr: T[]): NonNullable<T>[] {
    return arr.filter(Boolean) as NonNullable<T>[];
}
