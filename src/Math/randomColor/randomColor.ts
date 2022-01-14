/**
 * 获得随机颜色
 * @returns
 * @example
 *
 */
export default function randomColor(): string {
	return `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
}
