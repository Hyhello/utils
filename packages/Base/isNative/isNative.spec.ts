import isNative from './isNative';

describe('#isNative()', () => {
	test('isNative', () => {
		expect(isNative(String.prototype.trim)).toBeTruthy();
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		expect(isNative(() => {})).toBeFalsy();
	});
});
