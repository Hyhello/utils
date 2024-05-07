const { slice } = Array.prototype;

/**
 * 将类数组（likeArr）转为真正的数组。（注：类数组，包含 length, 且 index 从 0 开始）。
 * @param likeArr 类数组。
 * @returns {Array<T>} 返回一个新数组。
 * @see {@link https://hyhello.github.io/utils/#/toArray 在线文档}
 */
export default function toArray<T>(likeArr: ArrayLike<T>): Array<T> {
    return slice.call(likeArr);
}
