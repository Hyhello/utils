import isBrowser from '../../Base/isBrowser/isBrowser';
/**
 * 判断一个元素(root)是否包含另一个元素(el)
 * @returns
 * @example
 *
 */
export default function contains(root: Node, el: Node): boolean {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	if (root === el) return true;
	if (root.contains) return root.contains(el);
	// eslint-disable-next-line no-bitwise
	if (root.compareDocumentPosition) return !!(root.compareDocumentPosition(el) & 16);
	// eslint-disable-next-line no-cond-assign
	while ((el = <Node>el.parentNode)) if (el === root) return true;
	return false;
}
