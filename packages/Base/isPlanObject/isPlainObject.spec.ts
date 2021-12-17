import isPlainObject from './isPlainObject';

describe('#isPlainObject()', () => {
	test('isPlainObject', () => {
		expect(isPlainObject(null)).toBeFalsy();
		expect(isPlainObject({})).toBeTruthy();
		expect(isPlainObject([])).toBeFalsy();
	});
});
