/**
 * 从给定文本中去除 HTML
 * @returns
 * @example
 * stripHtml('<div>11111111</div>'); => 11111111
 */
export default function stripHtml(html: string): string {
	return new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
}
