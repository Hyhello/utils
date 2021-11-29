import getType from './getType';
/**
 * 判断是否是boolean
 * @param v
 * @returns
 * @example
 * isBoolean(true) // true
 * isBoolean(new Boolean()) // true
 */
export default function isBoolean(v: unknown): boolean {
	return getType(v) === 'boolean';
}
