/**
 * 检测是否是原生方法
 * @param ctor
 * @returns boolean
 * @example
 * isNative(Math.abs); // true
 * isNative(function () {}); // false
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function isNative(ctor: Function): boolean {
	return typeof ctor === 'function' && /native code/.test(ctor.toString());
}
