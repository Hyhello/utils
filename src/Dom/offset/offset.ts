import { isBrowser } from '@/Base';

type IPos = {
    x: number;
    y: number;
};

/**
 * 获取元素（el）距离文档（document.documentElement || document.body）的距离。
 * @param el 待处理的 HTML 元素。
 * @returns {IPos} 返回元素el，距离左上角的x，y值。
 * @see {@link https://hyhello.github.io/utils/#/offset 在线文档}
 */
export default function offset(el: HTMLElement): IPos {
    if (!isBrowser()) throw new Error('This method is not supported in the current environment');
    const pos: IPos = { x: 0, y: 0 };
    while (el) {
        pos.x += el.offsetLeft;
        pos.y += el.offsetTop;
        el = <HTMLElement>el.offsetParent;
    }
    return pos;
}
