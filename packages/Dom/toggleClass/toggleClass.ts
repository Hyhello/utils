import hasClass from '../hasClass/hasClass';
import addClass from '../addClass/addClass';
import removeClass from '../removeClass/removeClass';

/**
 * toggle class
 * @param el
 * @param cls
 */
export default function toggleClass(el: HTMLElement, cls: string): void {
	if (hasClass(el, cls)) {
		removeClass(el, cls);
	} else {
		addClass(el, cls);
	}
}
