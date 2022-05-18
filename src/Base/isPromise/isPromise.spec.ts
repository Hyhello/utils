import isPromise from './isPromise';

describe('#isPromise()', () => {
	test('isPromise', () => {
		expect(isPromise(Promise.reject)).toBeFalsy();
		expect(isPromise(Promise.resolve)).toBeFalsy();
		// expect(isPromise(Promise.reject(new Error('error')))).toBeTruthy();
		expect(isPromise(Promise.resolve())).toBeTruthy();
		expect(isPromise(new Promise((resolve) => resolve(true)))).toBeTruthy();
	});
});
