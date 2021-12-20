import isArray from './isArray';

describe('isArray', () => {
	const nIsArray = Array.isArray;
	beforeEach(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		Array.isArray = null;
	});
	afterEach(() => {
		Array.isArray = nIsArray;
	});
	test('isArray', () => {
		const value: Array<unknown> = [];
		const likeArray = { length: 1, 0: '张三' };
		expect(isArray(likeArray)).toBeFalsy();
		expect(isArray(value)).toBeTruthy();
	});
});
