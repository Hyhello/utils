import isBrowser from '../../Base/isBrowser/isBrowser';
/**
 * 判断元素是否classname
 * @param el
 * @param cls
 * @returns boolean
 */
export default function hasClass(el: HTMLElement, cls: string): boolean {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	const reg = new RegExp(`\\b${cls}\\b`);
	return reg.test(el.className);
}
