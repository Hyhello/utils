import isBrowser from '../../Base/isBrowser/isBrowser';

type IPos = {
	x: number;
	y: number;
};
/**
 * 获取距离文档顶部的offset
 * @param el
 * @returns
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
