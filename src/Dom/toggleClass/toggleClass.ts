import hasClass from '../hasClass/hasClass';
import addClass from '../addClass/addClass';
import removeClass from '../removeClass/removeClass';
import isBrowser from '../../Base/isBrowser/isBrowser';

/**
 * toggle class
 * @param el
 * @param cls
 */
export default function toggleClass(el: HTMLElement, cls: string): void {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	if (hasClass(el, cls)) {
		removeClass(el, cls);
	} else {
		addClass(el, cls);
	}
}
