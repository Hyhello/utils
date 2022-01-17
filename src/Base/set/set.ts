/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import isNumber from '../isNumber/isNumber';
/**
 * set 设置/更新对象/数组里面的值
 * @returns
 * @example
 *
 */
// TODO: 此处类型没有整清晰
export default function set(obj: object, path: string | Array<string | number>, value: unknown): object {
	const pathList: any[] = !Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path;
	const len = pathList.length;

	return pathList.reduce((o, k, i, _) => {
		const index = i + 1;
		if (len === index) {
			o[k] = value;
			return null;
		}
		if (k in o) return o[k];
		o[k] = isNumber(+_[index]) ? [] : {};
		return o[k];
	}, obj);
	return obj;
}
