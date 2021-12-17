/**
 * 最简单的template，类似于artTemplate，但比它简单
 * @param str
 * @param opt
 * @returns
 * @example
 * template('<a href="{url}">{title}</a>', {url: 'http://www.a.com', title: '标题'}); => <a href="http://www.a.com">标题</a>
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function template(str: string, opt: object): string {
	return str.replace(/\{\s*(\w+?)\s*\}/gi, function (_, $1) {
		// eslint-disable-next-line @typescript-eslint/ban-types
		return opt[<keyof typeof opt>$1] || '';
	});
}
