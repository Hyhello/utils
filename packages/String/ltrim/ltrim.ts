/**
 * ltrim 去除左侧空格
 * @param input
 * @returns
 * @example
 * ltrim('    aa  aaa') => aa  aaa
 */
export default function ltrim(input: string): string {
	return input.replace(/^\s*/g, '');
}
