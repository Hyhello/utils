/**
 * 判断一个元素(root)是否包含另一个元素(el)
 * @returns
 * @example
 *
 */
export default function contains(root: HTMLElement, el: HTMLElement): boolean {
	// eslint-disable-next-line no-bitwise
	if (root.compareDocumentPosition) return root === el || !!(root.compareDocumentPosition(el) & 16);
	if (root.contains && el.nodeType === 1) {
		return root.contains(el) && root !== el;
	}
	// eslint-disable-next-line no-cond-assign
	while ((el = <HTMLElement>el.parentNode)) if (el === root) return true;
	return false;
}
