import { isBrowser } from '@/Base';

/**
 * 可能将值（input）添加后缀 px。
 * @param input 待处理的值。
 * @returns {string} 可能返回一个后缀为 px 的字符串。
 * @see {@link https://hyhello.github.io/utils/#/maybeAddPx 在线文档}
 */
export default function maybeAddPx(input: string | number): string {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	return Number.isNaN(+input) ? String(input) : `${input}px`;
}
