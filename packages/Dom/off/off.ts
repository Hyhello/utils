/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 移除元素监听
 * @param el
 * @param type
 * @param listener
 */
export default function off(el: HTMLElement, type: string, listener: EventListenerOrEventListenerObject): void {
	if (el.removeEventListener) {
		el.removeEventListener(type, listener, false);
	} else if ((<any>el).detachEvent) {
		(<any>el).detachEvent(`on${type}`, listener);
	} else {
		(<any>el)[`on${type}`] = null;
	}
}
