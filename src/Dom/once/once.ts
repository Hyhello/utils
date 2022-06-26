import on from '../on/on';
import off from '../off/off';
import { isBrowser } from '@/Base';

/**
 * 给指定 HTML 元素（el）绑定事件（type），触发后将移除该绑定事件（注：触发一次）
 * @param el 待处理的 HTML 元素。
 * @param type 表示监听事件类型的字符串。
 * @param listener 当所监听的事件类型触发时，会接收到一个事件通知的函数。
 * @see {@link https://hyhello.github.io/utils/#/maybeAddPx 在线文档}
 */
export default function once(el: Element, type: string, listener: EventListener): void {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	const cb = (...args: [Event]) => {
		// eslint-disable-next-line no-unused-expressions
		listener && listener.apply(el, args);
		off(el, type, cb);
	};
	on(el, type, cb);
}
