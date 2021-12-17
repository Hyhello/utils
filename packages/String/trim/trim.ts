const nTrim = String.prototype.trim;
/**
 * trim 去除两边空格
 * @param input
 * @returns
 * @example
 * trim('aa  aaa   ') => aa  aaa
 */
export default function trim(input: string): string {
	try {
		return nTrim.call(input);
	} catch (e) {
		return input.replace(/^\s*|\s*$/g, '');
	}
}
