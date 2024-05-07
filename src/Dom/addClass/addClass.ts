import { isBrowser } from '@/Base';
import trim from '../../String/trim/trim';
import hasClass from '../hasClass/hasClass';

/**
 * 给指定元素(el)添加样式。
 * @param el 待处理的 HTML 元素。
 * @param cls 待添加的 className。
 * @see {@link https://hyhello.github.io/utils/#/addClass 在线文档}
 */
export default function addClass(el: Element, cls: string): void {
    if (!isBrowser()) throw new Error('This method is not supported in the current environment');
    if (hasClass(el, cls)) return;
    el.className = trim(`${el.className} ${cls}`);
}
