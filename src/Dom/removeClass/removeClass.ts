import hasClass from '../hasClass/hasClass';
import isBrowser from '../../Base/isBrowser/isBrowser';

/**
 * 移除样式classname
 * @param el
 * @param cls
 * @returns
 */
export default function removeClass(el: HTMLElement, cls: string): void {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	if (!hasClass(el, cls)) return;
	const reg = new RegExp(`\\b${cls}\\b`);
	el.className = el.className.replace(reg, '').split(/\s+/).join(' ');
}
