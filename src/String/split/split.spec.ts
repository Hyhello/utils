import split from './split';

describe('#split()', () => {
	test('split', () => {
		expect(split('')).toEqual('');
		expect(split('aaaa')).toEqual('a,aaa');
		expect(split('bbbbb', 2)).toEqual('b,bb,bb');
		expect(split('ccccc', 2, '|')).toEqual('c|cc|cc');
	});
});
