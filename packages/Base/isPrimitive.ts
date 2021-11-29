/**
 * 检测是否原始数据类型（Primitive data types）
 * @param val
 * @returns true / false
 * @example
 *  console.log(isPrimitive(false));  true
 *  console.log(isPrimitive(true));   true
 *  console.log(isPrimitive(null));   true
 *  console.log(isPrimitive());       true
 *  console.log(isPrimitive(42));     true
 *  console.log(isPrimitive('abc'));  true
 *  console.log(isPrimitive(Symbol())); true
 *  console.log('--------------------------------------');
 *  console.log(isPrimitive({}));     false
 *  console.log(isPrimitive([]));     false
 *  console.log(isPrimitive(function () {}));  false
 *  console.log(isPrimitive(new Date()));  false
 *
 */
export default function isPrimitive(val?: unknown): boolean {
	return Object(val) !== val;
}
