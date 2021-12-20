/**
 * 拆分
 * @param val
 * @param index
 * @param separated
 * @returns
 * @example
 * split('aaaa'); => a,aaa
 * split(1000); => 1,000
 */
export default function split(val: number | string, index = 3, separated = ','): string {
	if (!val) return String(val);
	const reg = new RegExp(`\\B(?=(?:\\w{${index}})+\\b)`, 'g');
	return String(val).replace(reg, separated);
}
