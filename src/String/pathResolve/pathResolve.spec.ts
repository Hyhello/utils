import pathResolve from './pathResolve';

describe('#pathResolve()', () => {
	test('a simple resolve like path.resolve', () => {
		expect(pathResolve('/b', '/ad/bc', './c', './a/dddd')).toEqual('/ad/bc/c/a/dddd');
		expect(pathResolve('/b', './b')).toEqual('/b/b');
		expect(pathResolve('/b', '/b')).toEqual('/b');
		expect(pathResolve('/b', '../b')).toEqual('/b');
		expect(pathResolve('a/b', '../b')).toEqual('a/b');
		expect(pathResolve('a/.b', '../b/.adb')).toEqual('a/b/.adb');
		expect(pathResolve('./a/.b', '../b/.adb')).toEqual('a/b/.adb');
		expect(pathResolve('././a/.b', '../b/.adb')).toEqual('a/b/.adb');
	});
});
