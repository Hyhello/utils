import isObject from '../isObject/isObject';
/**
 * 检测变量（v）是否是一个 HTML 元素。
 * @param el 待检测类型的变量。
 * @returns {boolean} 一个指示指定的变量是否为 HTML 元素。
 * @see {@link https://hyhello.github.io/utils/#/isElement 在线文档}
 */
export default function isElement(el: unknown): boolean {
    return isObject(el) && (<Node>el).nodeType === 1;
}
