/* eslint-disable @typescript-eslint/no-explicit-any */
import { isBrowser } from '@/Base';
/**
 * 给指定 HTML 元素（el）移除已绑定的事件（type）。
 * @param el 待处理的 HTML 元素。
 * @param type 表示监听事件类型的字符串。
 * @param listener 当所监听的事件类型触发时，会接收到一个事件通知的函数。
 * @see {@link https://hyhello.github.io/utils/#/off 在线文档}
 */
export default function off(el: Element, type: string, listener: EventListenerOrEventListenerObject): void {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	if (el.removeEventListener) {
		el.removeEventListener(type, listener, false);
	} else if ((<any>el).detachEvent) {
		(<any>el).detachEvent(`on${type}`, listener);
	} else {
		(<any>el)[`on${type}`] = null;
	}
}
