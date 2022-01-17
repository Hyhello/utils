import isObject from '../isObject/isObject';
/**
 * 判断是否是个元素
 * @param el
 * @returns
 * @example
 * isElement(document.createElement('div')); => true;
 */
export default function isElement(el: unknown): boolean {
	return isObject(el) && (<Node>el).nodeType === 1;
}
