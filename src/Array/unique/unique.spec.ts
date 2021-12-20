import unique from './unique';

describe('#unique()', () => {
	test('array unique', () => {
		const value = [1, 2, 3, 5, 5];
		expect(unique(value)).toEqual([1, 2, 3, 5]);
	});
});
