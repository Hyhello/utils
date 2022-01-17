import isBrowser from '../../Base/isBrowser/isBrowser';
/**
 * 从给定文本中去除 HTML
 * @returns
 * @example
 * stripHtml('<div>11111111</div>'); => 11111111
 */
export default function stripHtml(html: string): string {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	return new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
}
