import { isObject } from '@/Base';
import { kebabCase } from '@/String';

export function setStyle(el: HTMLElement, property: string, value: any): void;

export function setStyle(el: HTMLElement, property: { [key: string]: any }): void;

export function setStyle(el: HTMLElement, property: string | { [key: string]: any }, value?: any): void;

/**
 * 设置指定元素的 CSS 样式。
 * @param el 待设置样式的元素。
 * @param property
 * @param value
 * @see {@link https://hyhello.github.io/utils/#/setStyle 在线文档}
 */
export default function setStyle(el: HTMLElement, property: string | { [key: string]: any }, value?: any): void {
    if (isObject(property)) {
        let cssText = ';';
        for (const key in property) {
            cssText += `${kebabCase(key)}: ${property[key as keyof typeof property]};`;
        }
        el.style.cssText += cssText;
    } else {
        el.style.setProperty(kebabCase(property), value);
    }
}
