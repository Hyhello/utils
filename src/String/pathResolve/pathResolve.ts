/**
 * 功能类似于 path.resolve
 * @param basePath
 * @param args
 * @returns path
 * @example
 * pathResolve('/b', '/ad/bc', './c', './a/dddd'); => '/ad/bc/c/a/dddd'
 * pathResolve('/b', '/ad/bc', '../c'); => '/b/ad/c'
 */
export default function pathResolve(...args: string[]): string {
	// 分隔符
	let path = '';
	for (let i = args.length - 1; i >= 0; i--) {
		const url = args[i];
		path = `${url}/${path}`;
		if (/^\//.test(url)) break;
	}
	const pathList: string[] = path.split('/').reduce((arr: string[], item, index) => {
		if (item === '..') {
			arr = arr.slice(0, -1);
			if (arr.length === 0) {
				// 此处主要是解决../ 转为绝对路径
				arr.push('');
			}
		} else if ((!index || item) && item !== '.') {
			// 此处判定index，主要是作用于是否是absolutePath
			arr.push(item);
		}
		return arr;
	}, []);
	return pathList.join('/');
}
