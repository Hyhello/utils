/* eslint-disable @typescript-eslint/no-explicit-any */
import { isBrowser } from '@/Base';

// 绑定
const _on = (
	el: Element,
	type: string,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
) => {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	if (el.addEventListener) {
		el.addEventListener(type, listener, options);
	} else if ((<any>el).attachEvent) {
		(<any>el).attachEvent(`on${type}`, listener);
	} else {
		(<any>el)[`on${type}`] = listener;
	}
};

/**
 * 给指定 HTML 元素（el）绑定事件（type）。
 * @param el 待处理的 HTML 元素。
 * @param type 表示监听事件类型的字符串或者字符串数组。
 * @param listener 当所监听的事件类型触发时，会接收到一个事件通知的函数。
 * @see {@link https://hyhello.github.io/utils/#/on 在线文档}
 */
export default function on(
	el: Element,
	type: string | Array<string>,
	listener: EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
): void {
	const typeList = Array.isArray(type) ? type : [type];
	typeList.forEach((_type) => _on(el, _type, listener, options));
}
