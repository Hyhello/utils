import rangeArr from '../rangeArr/rangeArr';
/**
 * 将数组（arr）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果 arr 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param arr 需要处理的数组。
 * @param size 每个数组区块的长度。
 * @returns {Array<T>} 返回一个包含拆分区块的新数组。
 * @see {@link https://hyhello.github.io/utils/#/chunk 在线文档}
 */
export default function chunk<T>(arr: T[], size?: number): T[] | T[][] {
    if (!size) return arr.slice();
    const len = Math.ceil(arr.length / size);
    return rangeArr(len, (i) => arr.slice(i * size, (i + 1) * size)) as T[][];
}
