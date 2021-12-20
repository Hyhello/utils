import getType from '../getType/getType';
/**
 * 判断是否是对象
 * @param v
 * @returns
 * @example
 * isPlainObject({}) // true
 * isPlainObject([]) // false
 */
export default function isPlainObject(v: unknown): boolean {
	return getType(v) === 'object';
}
