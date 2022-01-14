/**
 * 检查一个元素是否是焦点元素
 * @returns
 * @example
 *
 */
export default function hasFocus(el: HTMLElement): boolean {
	return el === document.activeElement;
}
