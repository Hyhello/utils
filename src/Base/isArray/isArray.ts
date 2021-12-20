/**
 * 判断是否是一个数组
 * @param v
 * @returns
 * @example
 * isArray(new Array()); true
 * isArray([]) true
 * isArray({}) false
 */
export default function isArray(v: unknown): boolean {
	try {
		return Array.isArray(v);
	} catch (e) {
		return v instanceof Array;
	}
}
