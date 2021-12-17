/**
 *
 * @param arg
 * @returns
 * @example
 * isObject({});   true
 * isObject(null); false
 */
export default function isObject(arg: unknown): boolean {
	return arg !== null && typeof arg === 'object';
}
