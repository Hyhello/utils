import flatten from './flatten';

describe('#flatten()', () => {
	const list = [[1, [2, [4]], [3]]];
	test('flatten test', () => {
		expect(flatten(list)).toEqual([1, 2, 4, 3]);
	});
});
