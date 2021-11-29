/**
 * rtrim 去除右侧空格
 * @param input
 * @returns
 * @example
 * rtrim('aa  aaa   ') => aa  aaa
 */
export default function rtrim(input: string): string {
	return input.replace(/\s*$/g, '');
}
