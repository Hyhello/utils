import trim from '../../String/trim/trim';
import hasClass from '../hasClass/hasClass';
import isBrowser from '../../Base/isBrowser/isBrowser';

/**
 * 给元素添加样式
 * @param el
 * @param cls
 * @returns
 */
export default function addClass(el: HTMLElement, cls: string): void {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	if (hasClass(el, cls)) return;
	el.className = trim(`${el.className} ${cls}`);
}
