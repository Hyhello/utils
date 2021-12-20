import pathResolve from './pathResolve';

describe('#pathResolve()', () => {
	test('a simple resolve like path.resolve', () => {
		const value = './b/ad/bc/c/a/dddd';
		expect(pathResolve('./b', '/ad/bc', './c', './a/dddd')).toEqual(value);
	});
});
