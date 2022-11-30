import { isBrowser } from '@/Base';
import hasClass from '../hasClass/hasClass';

/**
 * 移除指定元素(el)的 className(cls)
 * @param el 待处理的 HTML 元素。
 * @param cls 待移除的 className。
 * @see {@link https://hyhello.github.io/utils/#/removeClass 在线文档}
 */
export default function removeClass(el: Element, cls: string): void {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	if (!hasClass(el, cls)) return;
	const reg = new RegExp(`\\b${cls}\\b`);
	el.className = el.className.replace(reg, '').trim().split(/\s+/).join(' ');
}
