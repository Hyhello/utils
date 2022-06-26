import { isBrowser } from '@/Base';
import { camelCase, kebabCase } from '@/String';
/**
 * 获取指定元素的 CSS 样式。
 * @param el 要获取样式的元素。
 * @param property 需要查询的 CSS 属性名称。
 * @returns {string} 返回查询后的 CSS 属性值。
 * @see {@link https://hyhello.github.io/utils/#/getStyle 在线文档}
 */
export default function getStyle(el: HTMLElement, property: string): string | undefined {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	try {
		return document.defaultView?.getComputedStyle(el, null).getPropertyValue(kebabCase(property));
	} catch (e) {
		return (<any>el).currentStyle[camelCase(property)];
	}
}
