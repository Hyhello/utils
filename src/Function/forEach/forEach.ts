/* eslint-disable @typescript-eslint/ban-types */
const hasOwnProperty = Object.prototype.hasOwnProperty;

type KeyTypeOf<T> = T extends Record<string, unknown> ? string : number;

type ValueTypeOf<T> = T extends Record<string, infer R> | Array<infer R> ? R : T;

/**
 * forEach函数，支持对象，数组，字符串，数字等遍历
 * @param
 * @returns
 * @see {@link https://hyhello.github.io/utils/#/forEach 在线文档}
 */
export default function forEach<T>(target: T, fn: (value: ValueTypeOf<T>, key: KeyTypeOf<T>, target: T) => any): void {
	if (target == null) return;
	if (typeof target !== 'object') {
		target = [target] as unknown as T;
	}
	if (Array.isArray(target)) {
		for (let i = 0, ii = target.length; i < ii; i++) {
			fn.call(null, target[i], i as KeyTypeOf<T>, target);
		}
	} else {
		for (const key in target) {
			if (hasOwnProperty.call(target, key)) {
				fn.call(null, target[key] as ValueTypeOf<T>, key as unknown as KeyTypeOf<T>, target);
			}
		}
	}
}
