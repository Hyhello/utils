const { slice } = Array.prototype;

/**
 * 类数组转为数组
 * @param likeArr
 * @returns
 * @example
 * toArray({ 0: 'a', length: 1 }); => ['a']
 */
export default function toArray<T>(likeArr: ArrayLike<T>): Array<T> {
	return slice.call(likeArr);
}
