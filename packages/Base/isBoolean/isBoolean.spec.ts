import isBoolean from './isBoolean';

describe('#isBoolean()', () => {
	test('isBoolean', () => {
		expect(isBoolean(1)).toBeFalsy();
		expect(isBoolean(Boolean)).toBeFalsy();
		expect(isBoolean(true)).toBeTruthy();
		expect(isBoolean(false)).toBeTruthy();
		// eslint-disable-next-line no-new-wrappers
		expect(isBoolean(new Boolean())).toBeTruthy();
	});
});
