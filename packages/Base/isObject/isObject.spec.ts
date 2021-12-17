import isObject from './isObject';

describe('#isObject()', () => {
	test('isObject', () => {
		expect(isObject(null)).toBeFalsy();
		expect(isObject({})).toBeTruthy();
		expect(isObject([])).toBeTruthy();
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		expect(isObject(() => {})).toBeFalsy();
	});
});
