import { isBrowser } from '@/Base';
import hasClass from '../hasClass/hasClass';
import addClass from '../addClass/addClass';
import removeClass from '../removeClass/removeClass';

/**
 * toggle class
 * @param el
 * @param cls
 */
/**
 * 给指定 HTML 元素（el）移除或者添加 className（cls）
 * @param el 待处理的 HTML 元素。
 * @param cls 待移除/添加的 className
 * @see {@link https://hyhello.github.io/utils/#/toggleClass 在线文档}
 */
export default function toggleClass(el: Element, cls: string): void {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	if (hasClass(el, cls)) {
		removeClass(el, cls);
	} else {
		addClass(el, cls);
	}
}
