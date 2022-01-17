/* eslint-disable @typescript-eslint/no-explicit-any */
import isBrowser from '../../Base/isBrowser/isBrowser';
/**
 * 给元素添加监听
 * @param el
 * @param type
 * @param fn
 */
export default function on(el: HTMLElement, type: string, listener: EventListenerOrEventListenerObject): void {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	if (el.addEventListener) {
		el.addEventListener(type, listener);
	} else if ((<any>el).attachEvent) {
		(<any>el).attachEvent(`on${type}`, listener);
	} else {
		(<any>el)[`on${type}`] = listener;
	}
}
