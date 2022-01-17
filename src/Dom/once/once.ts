import on from '../on/on';
import off from '../off/off';
import isBrowser from '../../Base/isBrowser/isBrowser';

/**
 * 移除元素监听
 * @param el
 * @param type
 * @param listener
 */
export default function once(el: HTMLElement, type: string, listener: EventListener): void {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	const cb = (...args: [Event]) => {
		// eslint-disable-next-line no-unused-expressions
		listener && listener.apply(el, args);
		off(el, type, cb);
	};
	on(el, type, cb);
}
