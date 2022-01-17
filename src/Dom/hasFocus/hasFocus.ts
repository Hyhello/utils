import isBrowser from '../../Base/isBrowser/isBrowser';
/**
 * 检查一个元素是否是焦点元素
 * @returns
 * @example
 *
 */
export default function hasFocus(el: HTMLElement): boolean {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	return el === document.activeElement;
}
