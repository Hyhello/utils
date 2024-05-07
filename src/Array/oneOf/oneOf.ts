/**
 * 判断数组 list 是否包含元素 target。
 * @param target 待判断的元素。
 * @param list 数组。
 * @returns {boolean} 数组（array）包含元素（target）则为true，否则为false。
 * @see {@link https://hyhello.github.io/utils/#/oneOf 在线文档}
 */
export default function oneOf<T>(target: T, list: Array<T>): boolean {
    return list.some((item) => target === item);
}
