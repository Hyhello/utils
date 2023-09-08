/* eslint-disable @typescript-eslint/ban-ts-comment */
import { forEach } from '@/Function';
import { isArray, isObject } from '@/Base';

// type IMResult<T extends object> = {
// 	[K in keyof T]?: T[K] extends object ? IMResult<T[K]> : T[K];
// };

/**
 * merge函数，类似于Object.assign，但是可深度merge
 * @param
 * @returns
 * @see {@link https://hyhello.github.io/utils/#/merge 在线文档}
 */
export default function merge<T>(/**obj1, obj2, obj3, .... */ target: boolean | T, ...rest: T[]) {
	let result = target;
	if (!rest.length) return result;
	if (typeof target === 'boolean') {
		result = target === true ? {} : rest[0];
	}
	const result = new Object(target);
	const _ossignObject = function (val, key) {
		if (isObject(val)) {
			const defaultValue = isArray(val) ? [] : {};
			result[key] = merge(result[key] || defaultValue, val);
		} else {
			result[key] = val;
		}
	};
	for (let i = 0, ii = rest.length; i < ii; i++) {
		forEach(rest[i], _ossignObject);
	}
	return result;
}
