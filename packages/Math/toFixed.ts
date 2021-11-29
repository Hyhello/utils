const nToFixed = Number.prototype.toFixed;
/**
 * 重写toFixed，解决int类型被fixed的问题
 * @param num
 * @param fixed
 * @returns string
 * @example
 * toFixed(1, 3); 1 <string>
 * toFixed(1.2, 3);  1 <string>
 */
export default function toFixed(num: number, fixed?: number): string {
	if (Math.floor(num) - num) return String(num);
	return nToFixed.call(num, fixed);
}
