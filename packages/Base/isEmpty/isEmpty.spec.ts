import isEmpty from './isEmpty';

describe('#isEmpty()', () => {
	test('isEmpty', () => {
		expect(isEmpty('div')).toBeFalsy();
		expect(isEmpty(12)).toBeFalsy();
		expect(isEmpty(true)).toBeFalsy();
		expect(isEmpty(false)).toBeFalsy();
		expect(isEmpty({ a: 1 })).toBeFalsy();
		expect(isEmpty([1])).toBeFalsy();
		expect(isEmpty(new Error('bb'))).toBeFalsy();
		expect(isEmpty(new File(['./Array.spec.ts'], 'array'))).toBeFalsy();
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		expect(isEmpty(function () {})).toBeTruthy();
		expect(isEmpty(new Map())).toBeTruthy();
		expect(isEmpty(new Error())).toBeTruthy();
		expect(isEmpty(new Set())).toBeTruthy();
		expect(isEmpty(null)).toBeTruthy();
	});
});
