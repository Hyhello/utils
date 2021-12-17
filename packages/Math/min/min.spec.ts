import min from './min';

describe('#min()', () => {
	test('min-test', () => {
		expect(min([1, 2, 3, 4])).toBe(1);
		expect(min([])).toBe(Infinity);
	});
});
