import flatten from './flatten';

describe('#flatten()', () => {
	const list = [[1, [2, [4]], [3]]];
	test('flatten test', () => {
		console.log(JSON.stringify(flatten(list, 1)));
		expect(flatten(list, 0)).toEqual([[1, [2, [4]], [3]]]);
		expect(flatten(list, -1)).toEqual([[1, [2, [4]], [3]]]);
		expect(flatten(list)).toEqual([1, [2, [4]], [3]]);
		expect(flatten(list, true)).toEqual([1, 2, 4, 3]);
		expect(flatten(list, 1)).toEqual([1, [2, [4]], [3]]);
		expect(flatten(list, 2)).toEqual([1, 2, [4], 3]);
		expect(flatten(list, 3)).toEqual([1, 2, 4, 3]);
	});
});
