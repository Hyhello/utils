/* eslint-disable prefer-spread */
/**
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param input 需要处理的数组。
 * @param size 每个数组区块的长度。
 * @returns {Array<T>} 返回一个包含拆分区块的新数组。
 * @see {@link https://hyhello.github.io/utils/#/chunk 在线文档}
 */
export default function chunk<T>(input: T[], size?: number): T[] | T[][] {
    if (!size) return input.slice();
    const len: number = Math.ceil(input.length / size);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return Array.apply(null, { length: len }).map((x, i) => input.slice(i * size, (i + 1) * size));
}
