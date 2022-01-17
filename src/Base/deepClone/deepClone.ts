/* eslint-disable @typescript-eslint/no-explicit-any */
const hasOwn = Object.prototype.hasOwnProperty;
/**
 * 深拷贝
 * @returns
 * @example
 *
 */
// TODO: 此处应该用泛型，但是没有找到比较好的递归泛型表达
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function deepClone(data: any): any {
	let result: any;
	if (data === null || typeof data !== 'object') return data;
	if (data instanceof Date) {
		result = new Date();
		result.setTime(data.getTime());
	} else if (typeof data === 'object') {
		result = data instanceof Array ? [] : {};
		for (const key in data) {
			if (hasOwn.call(data, key)) {
				result[key] = deepClone(data[key]);
			}
		}
	}
	return result;
}
