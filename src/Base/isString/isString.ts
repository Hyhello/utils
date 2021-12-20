import getType from '../getType/getType';
/**
 * 检测是否是字符串
 * @param input
 * @returns boolean
 * @example
 * isString(null); // false
 * isString(''); // true
 */
export default function isString(input: unknown): boolean {
	return getType(input) === 'string';
}
