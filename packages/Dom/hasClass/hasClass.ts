/**
 * 判断元素是否classname
 * @param el
 * @param cls
 * @returns boolean
 */
export default function hasClass(el: HTMLElement, cls: string): boolean {
	const reg = new RegExp(`\\b${cls}\\b`);
	return reg.test(el.className);
}
