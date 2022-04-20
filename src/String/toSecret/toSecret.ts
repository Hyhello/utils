/**
 * 将字符串其中字符转为'*'
 * @param str
 * @param args
 * @returns
 * @example
 * toSecret('402102331231', -6, -1); => 402102*****1;
 */
export default function toSecret(str: string, ...args: number[]): string {
	if (!str) return str;
	let [start = 0, end] = args;
	if (end == null) {
		end = start;
		start = 0;
	}
	end = Math.min(str.length, end);
	const diffVal = Math.abs(end - start);
	return str.slice(0, start) + '*'.repeat(diffVal) + str.slice(end);
}
