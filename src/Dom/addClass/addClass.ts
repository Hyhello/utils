import trim from '../../String/trim/trim';
import hasClass from '../hasClass/hasClass';

/**
 * 给指定元素(el)添加样式。
 * @param el 待处理的 HTML 元素。
 * @param cls 待添加的 className。
 * @see {@link https://hyhello.github.io/utils/#/addClass 在线文档}
 */
export default function addClass(el: HTMLElement, cls: string): void {
    if (hasClass(el, cls)) return;
    el.className = trim(`${el.className} ${cls}`);
}
