import { isBrowser } from '@/Base';
import { camelCase, kebabCase } from '@/String';

export function setStyle(el: HTMLElement, property: string, value: any): void;

export function setStyle(el: HTMLElement, property: { [key: string]: any }): void;

/**
 * 设置指定元素的 CSS 样式。
 * @param el 待设置样式的元素。
 * @param property
 * @param value
 * @see {@link https://hyhello.github.io/utils/#/setStyle 在线文档}
 */
export default function setStyle(el: HTMLElement, property: string | { [key: string]: any }, value?: any): void {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	if (typeof property === 'object') {
		let cssText = ';';
		for (const key in property) {
			cssText += `${kebabCase(key)}: ${property[key]};`;
		}
		el.style.cssText += cssText;
	} else {
		el.style[camelCase(property) as any] = value;
	}
}
