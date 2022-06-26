import { isBrowser } from '@/Base';
/**
 * 判断一个元素(root)是否包含另一个元素(el)
 * @param root 父元素节点。
 * @param el 子元素节点。
 * @returns {boolean} 如果元素(root)包含另一个元素(el)，则返回true, 反之为false。
 * @see {@link https://hyhello.github.io/utils/#/contains 在线文档}
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
