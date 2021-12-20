import isFunction from './isFunction';

describe('#isFunction()', () => {
	test('isFunction', () => {
		expect(isFunction(Boolean)).toBeTruthy();
		// eslint-disable-next-line no-new-wrappers
		expect(isFunction(new Boolean())).toBeFalsy();
		// eslint-disable-next-line no-new-func
		expect(isFunction(new Function('a'))).toBeTruthy();
	});
});
