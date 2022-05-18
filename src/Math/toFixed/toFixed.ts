const nToFixed = Number.prototype.toFixed;
/**
 * 重写toFixed，解决后面多余0的问题
 * @param num
 * @param fixed
 * @returns string
 * @example
 * toFixed(1, 3); 1 <string>
 * toFixed(1.2, 3);  1.2 <string>
 */
export default function toFixed(num: number, fixed?: number): string {
    const val = nToFixed.call(num, fixed);
    if (num === +val) return String(num);
	return val;
}
