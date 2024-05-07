import { isBrowser } from '@/Base';
/**
 * 判定 HTML 元素（el）是否包含指定 className（cls）。
 * @param el 待处理的 HTML 元素。
 * @param cls 待判断的 className。
 * @returns {boolean} 如果 HTML 元素（el）存在 className（cls）,则返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/hasClass 在线文档}
 */
export default function hasClass(el: Element, cls: string): boolean {
    if (!isBrowser()) throw new Error('This method is not supported in the current environment');
    const reg = new RegExp(`\\b${cls}\\b`);
    return reg.test(el.className);
}
