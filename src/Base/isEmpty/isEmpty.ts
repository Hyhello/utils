/* eslint-disable @typescript-eslint/no-explicit-any */
import getType from '../getType/getType';

/**
 * 检测变量（v）是否是一个空值。
 * @param val 待检测类型的变量。
 * @returns {boolean} 一个指示指定的变量是否为 空。
 * @see {@link https://hyhello.github.io/utils/#/isEmpty 在线文档}
 */
export default function isEmpty(val: unknown): boolean {
	if (val == null) return true;
	switch (getType(val)) {
		case 'array':
		case 'string':
		case 'function':
		case 'arguments':
			return !(<any>val).length;
		case 'file':
		case 'map':
		case 'size':
		case 'set':
			return !(<any>val).size;
		case 'error':
			return !(<any>val).message;
		case 'object':
			// eslint-disable-next-line @typescript-eslint/ban-types
			return !Object.keys(<object>val).length;
		default:
			break;
	}
	return false;
}
