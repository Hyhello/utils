import hasClass from '../hasClass/hasClass';

/**
 * 移除样式classname
 * @param el
 * @param cls
 * @returns
 */
export default function removeClass(el: HTMLElement, cls: string): void {
	if (!hasClass(el, cls)) return;
	const reg = new RegExp(`\\b${cls}\\b`);
	el.className = el.className.replace(reg, '').split(/\s+/).join(' ');
}
