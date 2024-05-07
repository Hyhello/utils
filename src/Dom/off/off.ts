/* eslint-disable @typescript-eslint/no-explicit-any */
import { isBrowser } from '@/Base';

const _off = (
    el: Element,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
) => {
    if (!isBrowser()) throw new Error('This method is not supported in the current environment');
    if (el.removeEventListener) {
        el.removeEventListener(type, listener, options);
    } else if ((<any>el).detachEvent) {
        (<any>el).detachEvent(`on${type}`, listener);
    } else {
        (<any>el)[`on${type}`] = null;
    }
};
/**
 * 给指定 HTML 元素（el）移除已绑定的事件（type）。
 * @param el 待处理的 HTML 元素。
 * @param type 表示监听事件类型的字符串或者字符串数组。
 * @param listener 当所监听的事件类型触发时，会接收到一个事件通知的函数。
 * @see {@link https://hyhello.github.io/utils/#/off 在线文档}
 */
export default function off(
    el: Element,
    type: string | Array<string>,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
): void {
    const typeList = Array.isArray(type) ? type : [type];
    typeList.forEach((_type) => _off(el, _type, listener, options));
}
