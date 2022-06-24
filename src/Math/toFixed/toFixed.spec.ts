import toFixed from './toFixed';

describe('#toFixed', () => {
	test('Number toFixed', () => {
		expect(typeof toFixed(1, 2) === 'string').toBeTruthy();
		expect(toFixed(1, 3)).toBe('1');
		expect(toFixed(1.2, 3)).toBe('1.2');
		expect(toFixed(200, 3)).toBe('200');
		expect(toFixed(1.3456, 3)).toBe('1.346');
	});
});
