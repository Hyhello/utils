/**
 * 判断元素（el）是否为焦点元素
 * @param el 待判断的html元素。
 * @returns {boolean} 一个指示指定的元素（el）是否为焦点元素。
 * @see {@link https://hyhello.github.io/utils/#/hasFocus 在线文档}
 */
export default function hasFocus(el: HTMLElement): boolean {
    return el === document.activeElement;
}
