/**
 * 判断数组里面是否存在元素
 * @param target
 * @param list
 * @returns boolean
 * @example
 * oneOf('a', ['a', 'b', 'c']); // true
 */
const oneOf = (target: string | number, list: Array<string | number>): boolean => {
	return list.some((item) => target === item);
};

export default oneOf;
