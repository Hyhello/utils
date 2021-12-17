/* eslint-disable @typescript-eslint/ban-types */
/**
 * get 获取对象/数组里面的值
 * @param obj
 * @param path
 * @param defaultValue
 * @returns
 */

// TODO: 此处类型没有整清晰

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function get(obj: object, path: string | Array<string | number>, defaultValue?: unknown): any {
	const pathList = !Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path;
	return (<Array<keyof typeof obj>>pathList).reduce((o, k) => o && o[k], obj) || defaultValue;
}
