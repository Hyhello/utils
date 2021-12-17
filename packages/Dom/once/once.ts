import on from '../on/on';
import off from '../off/off';

/**
 * 移除元素监听
 * @param el
 * @param type
 * @param listener
 */
export default function once(el: HTMLElement, type: string, listener: EventListener): void {
	const cb = (...args: [Event]) => {
		// eslint-disable-next-line no-unused-expressions
		listener && listener.apply(el, args);
		off(el, type, cb);
	};
	on(el, type, cb);
}
