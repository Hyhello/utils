/* eslint-disable @typescript-eslint/ban-types */
// import isNumber from './isNumber';
// import isPrimitive from './isPrimitive';

// TODO: 此处类型没有整清晰

/**
 * set
 * @param obj
 * @param path
 * @param value
 * @returns 返回一个object
 * @example
 * set({}, 'a.b.c', 1); => { a: { b: { c: 1 } } }
 */
// export default function set<T extends object>(obj: T, path: string | Array<string | number>, value: unknown): T {
// 	const pathList = !Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path;
// 	const len: number = pathList.length - 1;
// 	return (pathList as Array<keyof T>).reduce(function (o, k, i) {
// 		if (i === len) {
// 			// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 			(o[k] as any) = value;
// 			return obj;
// 		}
// 		o[k] = isPrimitive(o[k]) ? (isNumber(k) ? [] : {}) : o[k];
// 		return o[k];
// 	}, obj);
// }

// set({ a: 1 }, 'a.b.c', 1);
