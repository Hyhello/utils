/**
 * 功能类似于 path.resolve
 * @param basePath
 * @param args
 * @returns path
 * @example
 * pathResolve('/b', '/ad/bc', './c', './a/dddd'); => '/b/ad/bc/c/a/dddd'
 * pathResolve('/b', '/ad/bc', '../c'); => '/b/ad/c'
 */
export default function pathResolve(basePath: string, ...args: string[]): string {
	let path: string[] = basePath.replace(/\/$/, '').split('/');
	args.forEach((arg) => {
		const pathList: string[] = arg.split('/').filter((o) => o && o !== '.');
		const len: number = pathList.filter((o) => o === '..').length;
		path = path.slice(0, path.length - len).concat(pathList.slice(len));
	});
	return path.join('/');
}
