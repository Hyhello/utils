/**
 * 判断是否是浏览器
 * @returns
 * @example
 *
 */
export default function isBrowser(): boolean {
	return typeof window === 'object' && typeof document === 'object';
}
