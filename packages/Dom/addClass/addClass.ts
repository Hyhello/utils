import trim from '../../String/trim/trim';
import hasClass from '../hasClass/hasClass';

/**
 * 给元素添加样式
 * @param el
 * @param cls
 * @returns
 */
export default function addClass(el: HTMLElement, cls: string): void {
	if (hasClass(el, cls)) return;
	el.className = trim(`${el.className} ${cls}`);
}
