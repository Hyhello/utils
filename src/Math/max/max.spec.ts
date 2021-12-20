import max from './max';

describe('#max()', () => {
	test('max-test', () => {
		expect(max([1, 2, 3, 5])).toBe(5);
		expect(max([])).toBe(-Infinity);
	});
});
