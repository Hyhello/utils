/**
 * 创建一个去重后的新数组。
 * @param arr 待处理的数组。
 * @returns {Array<T>} 创建一个去重后的新数组。
 * @see {@link https://hyhello.github.io/utils/#/unique 在线文档}
 */
export default function unique<T>(arr: Array<T>): Array<T> {
    return arr.filter((item, index) => arr.indexOf(item, 0) === index);
}
